import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";

const BorderlessButton = ({
  onPress,
  size = 20,
  icon,
  color = "primary",
  title = "button",
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon size={size} name={icon} backgroundColor={colors[color]} />
      <AppText color={colors[color]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 0.4,
  },
});

export default BorderlessButton;
