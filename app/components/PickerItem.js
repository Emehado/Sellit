import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity underlayColor={colors.light} onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 15,
  },
});

//make this component available to the app
export default PickerItem;
