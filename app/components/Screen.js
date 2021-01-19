//import liraries
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

// create a component
const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

//make this component available to the app
export default Screen;
