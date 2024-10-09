import { darkColors, lightColors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";

type RowIconLabelProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  styles: any;
};

export const RowIconLabel: React.FC<RowIconLabelProps> = ({
  iconName,
  label,
  styles,
}) => {
  const isDarkMode = useColorScheme() === "dark";
  const color = isDarkMode ? darkColors.text : lightColors.text;

  return (
    <View style={styles.rowContainer}>
      <Ionicons name={iconName} size={24} color={color} />
      <Text style={styles.body}>{label}</Text>
    </View>
  );
};
