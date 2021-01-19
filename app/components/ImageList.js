//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppImagePicker from "./AppImagePicker";

// create a component
const ImageList = ({ onRemove, data, onAdd }) => {
  return (
    <View style={styles.container}>
      <AppImagePicker onChangeImage={(uri) => onAdd(uri)} />
      <FlatList
        horizontal
        data={data}
        style={{ maxWidth: "75%" }}
        keyExtractor={(list) => list}
        renderItem={({ item }) => (
          <AppImagePicker
            onChangeImage={() => onRemove(item)}
            imageUri={item}
          />
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 10,
  },
});

//make this component available to the app
export default ImageList;
