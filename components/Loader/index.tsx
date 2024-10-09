import { useDarkMode } from "@/hooks/useDarkMode";
import { darkColors, lightColors } from "@/theme/colors";
import { ActivityIndicator, View } from "react-native";

interface LoaderProps {
  styles: any;
}

const Loader = ({ styles }: LoaderProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <View style={styles.loaderFooterContainer}>
      <ActivityIndicator
        size="large"
        color={isDarkMode ? darkColors.text : lightColors.text}
      />
    </View>
  );
};

export default Loader;
