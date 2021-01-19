import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "../components/AppText";

const ViewImageScreen = ({ route, navigation }) => {
  const images = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={styles.closeIcon}
      >
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </TouchableOpacity>
      <Image
        uri={images[0].url}
        preview={{ uri: images[0].url }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
