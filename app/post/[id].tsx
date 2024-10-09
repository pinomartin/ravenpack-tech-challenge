import React, { useEffect, useCallback, useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import { Comment } from "@/types/comments";
import { darkColors, lightColors } from "@/theme/colors";
import { usePostsDetail } from "./usePostsDetail";
import { createStyles } from "./styles";

const PostDetail = () => {
  const { post, currentPostId, comments, loading, fetchPost, sharePost } =
    usePostsDetail();
  const isDarkMode = useColorScheme() === "dark";
  const styles = useMemo(() => createStyles(isDarkMode), [isDarkMode]);

  useEffect(() => {
    fetchPost(currentPostId);
  }, [currentPostId]);

  const renderItem = useCallback(
    ({ item }: { item: Comment }) => (
      <View style={styles.commentContainer}>
        <Text style={styles.commentName}>{item.name}</Text>
        <Text style={styles.commentEmail}>{item.email}</Text>
        <Text style={styles.commentBody}>{item.body}</Text>
      </View>
    ),
    []
  );

  const renderHeader = useCallback(
    () => (
      <>
        <View style={styles.postContainer}>
          <View
            style={{
              width: "15%",
              alignSelf: "flex-end",
            }}
          >
            <TouchableOpacity style={styles.userLinkButton} onPress={sharePost}>
              <Ionicons
                name="share-social-outline"
                size={16}
                color={isDarkMode ? darkColors.text : lightColors.text}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.postTitle}>{post?.title}</Text>
          <Text style={styles.postBody}>{post?.body}</Text>
          <Link href={`/users/${post?.userId}`}>
            <TouchableOpacity
              style={styles.userLinkButton}
              onPress={() => {
                router.push(`/users/${post?.userId}`);
              }}
            >
              <Ionicons
                name="person"
                size={20}
                color={isDarkMode ? darkColors.text : lightColors.text}
              />
              <Text style={styles.userLinkButtonText}>
                See more posts by this user
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Text style={styles.commentsTitle}>Comments:</Text>
      </>
    ),
    [post, isDarkMode]
  );

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (
    <FlatList
      data={comments as unknown as Comment[]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={
        <Text style={styles.noComments}>That is all folks :(</Text>
      }
      contentContainerStyle={styles.container}
    />
  );
};

export default PostDetail;
