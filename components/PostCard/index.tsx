import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
  onPress: () => void;
  styles: any;
  buttonLabel?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  onPress,
  styles,
  buttonLabel = "See more",
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body} numberOfLines={2}>
        {post.body}
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;
