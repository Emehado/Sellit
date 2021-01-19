import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Icon from "./Icon";

const IconButton = ({ icon, onPress, color, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...props}>
      <Icon name={icon} backgroundColor={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
