//import liraries
import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

// create a component
const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

// define your styles
const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 17,
  },
});

//make this component available to the app
export default ErrorMessage;
