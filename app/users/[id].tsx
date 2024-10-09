import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { router } from "expo-router";
import PostCard from "@/components/PostCard";
import Loader from "@/components/Loader";
import { Post } from "@/types/post";
import { RowIconLabel } from "@/components/RowIconLabel";
import { useUserPosts } from "./useUserPosts";

export default function UserPostsScreen() {
  const { posts, currentUserId, user, loading, fetchUserAndPosts, styles } =
    useUserPosts();

  useEffect(() => {
    fetchUserAndPosts(currentUserId);
  }, [currentUserId]);

  if (loading) return <Loader styles={styles} />;

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.card}>
          <Text style={styles.title}>{user.name}</Text>
          <RowIconLabel iconName="mail" label={user.email} styles={styles} />
          <RowIconLabel iconName="call" label={user.phone} styles={styles} />
          <RowIconLabel iconName="globe" label={user.website} styles={styles} />
        </View>
      )}
      <Text style={styles.title}>{posts.length} Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item: Post) => item.id.toString()}
        renderItem={({ item }: { item: Post }) => (
          <PostCard
            post={item}
            onPress={() => router.push(`/post/${item.id}`)}
            styles={styles}
          />
        )}
      />
    </View>
  );
}
