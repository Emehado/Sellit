import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppButton = ({
  onPress,
  children,
  color = "primary",
  variant = "contained",
}) => {
  if (variant === "outlined")
    return (
      <TouchableOpacity
        style={{
          ...styles.button,
          ...styles.outlined,
          borderColor: colors[color],
        }}
        onPress={onPress}
        activeOpacity={0.4}
      >
        <AppText
          fontFamily="bold"
          color={colors[color]}
          textTransform="uppercase"
        >
          {children}
        </AppText>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: colors[color] }}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <AppText fontFamily="bold" color={colors.white} textTransform="uppercase">
        {children}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
  outlined: {
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});

export default AppButton;
