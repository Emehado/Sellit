//import liraries
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppImagePicker = ({ imageUri, onChangeImage }) => {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are You Sure You Want to Delete This Image?", [
        { text: "Yes, Delete", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error Reading Image ", error);
    }
  };
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("masa Allow the camera Permission. Nanduruwa Shegee!");
    }
  };

  useEffect(() => {
    requestPermission();
  });
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons name="camera" size={40} color={colors.gray} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginRight: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AppImagePicker;
