import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { createStyles } from "@/theme/styles";

export const useDarkMode = () => {
  const isDarkMode = useColorScheme() === "dark";
  const styles = useMemo(() => createStyles(isDarkMode), [isDarkMode]);
  return { isDarkMode, styles };
};
