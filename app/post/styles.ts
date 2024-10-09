import { StyleSheet } from "react-native";
import { lightColors, darkColors } from "@/theme/colors";

export const createStyles = (isDarkMode: boolean) => {
  const colors = isDarkMode ? darkColors : lightColors;

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: colors.background,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    postContainer: {
      marginBottom: 20,
      backgroundColor: colors.card,
      borderRadius: 0,
      padding: 15,
      borderWidth: 3,
      borderColor: colors.text,
      shadowColor: colors.text,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 0,
      elevation: 5,
    },
    postTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: colors.text,
      fontFamily: "monospace",
    },
    postBody: {
      fontSize: 16,
      color: colors.text,
      marginBottom: 15,
      fontFamily: "monospace",
    },
    commentContainer: {
      backgroundColor: colors.card,
      borderRadius: 0,
      padding: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: colors.text,
      shadowColor: colors.text,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 0,
      elevation: 3,
    },
    commentsTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 10,
      color: colors.text,
      fontFamily: "monospace",
    },
    commentName: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 5,
      fontFamily: "monospace",
    },
    commentEmail: {
      fontSize: 14,
      color: "#666666",
      marginBottom: 5,
      fontFamily: "monospace",
    },
    commentBody: {
      fontSize: 14,
      color: colors.text,
      fontFamily: "monospace",
    },
    noComments: {
      fontSize: 16,
      color: "#666666",
      textAlign: "center",
      marginTop: 20,
      fontFamily: "monospace",
    },
    userLinkButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.text,
    },
    userLinkButtonText: {
      color: colors.text,
      fontFamily: "monospace",
    },
  });
};
