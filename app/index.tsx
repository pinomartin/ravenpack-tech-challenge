import React, { useCallback, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";
import PostCard from "@/components/PostCard";
import Loader from "@/components/Loader";
import { usePosts } from "@/hooks/usePosts";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Post } from "@/types/post";

const Home = () => {
  const { posts, loading, loadMore, fetchPosts, ITEMS_PER_PAGE, hasMore } =
    usePosts();
  const { styles } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <PostCard
        post={item}
        onPress={() => router.push(`/post/${item.id}`)}
        styles={styles}
      />
    ),
    [styles]
  );

  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  const renderFooter = useCallback(() => {
    if (!loading) return null;
    return <Loader styles={styles} />;
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={hasMore ? loadMore : null}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderFooter}
        initialNumToRender={ITEMS_PER_PAGE}
        maxToRenderPerBatch={ITEMS_PER_PAGE}
        windowSize={21}
        ListEmptyComponent={
          !loading && !posts?.length ? <Text>The end is here :(</Text> : null
        }
      />
    </View>
  );
};

export default Home;
