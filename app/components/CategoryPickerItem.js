import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={70}
        />
        <AppText style={styles.label} size={19} numberOfLines={2}>
          {item.label}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: "33%",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
  },
  touchable: { width: "100%" },
});

//make this component available to the app
export default CategoryPickerItem;
