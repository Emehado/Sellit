//import liraries
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

// create a component
const ListItemDeleteAction = ({ onPress, width = 70 }) => {
  return (
    <TouchableOpacity style={[styles.container, { width }]} onPress={onPress}>
      <View style={[styles.container, { width }]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default ListItemDeleteAction;
