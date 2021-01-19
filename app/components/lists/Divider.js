//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

// create a component
const Divider = () => {
  return <View style={styles.separator}></View>;
};

// define your styles
const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGray,
  },
});

//make this component available to the app
export default Divider;
