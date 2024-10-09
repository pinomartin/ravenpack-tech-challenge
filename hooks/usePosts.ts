import { useState, useCallback, useRef } from "react";
import { Post } from "@/types/post";
import { getPosts } from "@/api";

const ITEMS_PER_PAGE = 5;

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadingRef = useRef<boolean>(false);

  const fetchPosts = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    setLoading(true);
    try {
      const response = await getPosts(page, ITEMS_PER_PAGE);
      const newPosts = response.data;
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => {
          const uniquePosts = [...prevPosts];
          newPosts.forEach((newPost: Post) => {
            if (!uniquePosts.some((post) => post.id === newPost.id)) {
              uniquePosts.push(newPost);
            }
          });
          return uniquePosts;
        });
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [page, hasMore]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchPosts();
    }
  }, [loading, hasMore, fetchPosts]);

  return {
    posts,
    loading,
    page,
    ITEMS_PER_PAGE,
    hasMore,
    loadMore,
    fetchPosts,
  };
};
