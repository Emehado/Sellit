import React from "react";

import { Text } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_900Black,
} from "@expo-google-fonts/cairo";
import colors from "../config/colors";

export default ({
  children,
  fontFamily,
  textTransform = "none",
  color = colors.black,
  size = 20,
  style,
  ...props
}) => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  });

  switch (fontFamily) {
    case "light":
      fontFamily = "Cairo_300Light";
      break;
    case "black":
      fontFamily = "Cairo_900Black";
      break;
    case "bold":
      fontFamily = "Cairo_700Bold";
      break;
    case "semiBold":
      fontFamily = "Cairo_600SemiBold";
      break;
    case "extra-light":
      fontFamily = "Cairo_200ExtraLight";
      break;
    default:
      fontFamily = "Cairo_400Regular";
  }
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <Text
      style={[
        {
          fontSize: size,
          fontFamily,
          textTransform,
          color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
