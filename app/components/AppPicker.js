import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  View,
  Button,
  StyleSheet,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import colors from "../config/colors";

function AppPicker({
  icon,
  placeholder,
  PickerItemComponent = PickerItem,
  items,
  numberOfColumns = 1,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={colors.gray}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText color={colors.gray} style={styles.text}>
              {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={24}
            color={defaultStyles.colors.gray}
          />
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <Button
          title="CLOSE"
          color={colors.primary}
          onPress={() => setModalVisible(false)}
        />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 19,
    flex: 1,
  },
  close: {
    height: 90,
  },
});

export default AppPicker;
