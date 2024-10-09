import { getPostsByUserId, getUserById } from "@/api";
import { createStyles } from "@/theme/styles";
import { User } from "@/types/users";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { useColorScheme } from "react-native";

export const useUserPosts = () => {
  const { id: userId } = useLocalSearchParams();
  const currentUserId = Array.isArray(userId) ? userId[0] : userId;

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isDarkMode = useColorScheme() === "dark";
  const styles = useMemo(() => createStyles(isDarkMode), [isDarkMode]);

  const fetchUserAndPosts = async (userId: string) => {
    try {
      const [userResponse, postsResponse] = await Promise.all([
        getUserById(userId),
        getPostsByUserId(userId),
      ]);
      setUser(userResponse.data);
      setPosts(postsResponse.data);
    } catch (error) {
      console.error("Error fetching user and posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return { posts, currentUserId, user, loading, fetchUserAndPosts, styles };
};
