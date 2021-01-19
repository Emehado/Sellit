import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={defaultStyles.colors.gray}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.gray}
        style={[defaultStyles.text, { width: "100%" }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
