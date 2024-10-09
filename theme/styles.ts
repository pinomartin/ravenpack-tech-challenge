import { StyleSheet } from "react-native";
import { lightColors, darkColors } from "./colors";

export const createStyles = (isDarkMode: boolean) => {
  const colors = isDarkMode ? darkColors : lightColors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    card: {
      backgroundColor: colors.card,
      marginVertical: 8,
      padding: 16,
      borderRadius: 0,
      borderWidth: 3,
      borderColor: colors.text,
    },
    title: {
      fontSize: 20,
      color: colors.text,
      fontFamily: "monospace",
      fontWeight: "bold",
      marginBottom: 8,
    },
    body: {
      fontSize: 16,
      color: colors.text,
      fontFamily: "monospace",
    },
    footer: {
      alignItems: "flex-end",
      marginTop: 8,
    },
    button: {
      backgroundColor: colors.text,
      padding: 8,
      borderRadius: 0,
      borderWidth: 2,
      borderColor: colors.card,
    },
    buttonText: {
      color: colors.background,
      fontFamily: "monospace",
      fontWeight: "bold",
    },
    loaderFooterContainer: {
      marginVertical: 16,
      alignItems: "center",
    },
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
      gap: 10,
    },
    profileCard: {
      backgroundColor: isDarkMode ? "#333" : "#fff",
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    profileName: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 8,
    },
    profileInfo: {
      fontSize: 14,
      color: isDarkMode ? "#ccc" : "#666",
      marginBottom: 4,
    },
  });
};
