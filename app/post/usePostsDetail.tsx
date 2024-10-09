import { useCallback, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { shareAsync } from "expo-sharing";
import { documentDirectory, writeAsStringAsync } from "expo-file-system";
import { getCommentsByPostId, getPostById } from "@/api";
import { Post } from "@/types/post";

export const usePostsDetail = () => {
  const { id: postId } = useLocalSearchParams();
  const currentPostId = Array.isArray(postId) ? postId[0] : postId;
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPost = async (postId: string) => {
    try {
      const [postRes, commentsRes] = await Promise.all([
        getPostById(postId.toString()),
        getCommentsByPostId(postId.toString()),
      ]);
      setPost(postRes.data);
      setComments(commentsRes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const sharePost = useCallback(async () => {
    if (post) {
      try {
        const fileUri = documentDirectory + "post.txt";
        await writeAsStringAsync(fileUri, `${post.title}\n\n${post.body}`);
        await shareAsync(fileUri, {
          mimeType: "text/plain",
          dialogTitle: "Share Post",
        });
      } catch (error) {
        console.error("Error on Share:", error);
      }
    }
  }, [post]);

  return { post, currentPostId, comments, loading, fetchPost, sharePost };
};
