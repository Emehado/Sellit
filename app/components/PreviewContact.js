import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import IconButton from "./IconButton";
import Divider from "./lists/Divider";

const PreviewContact = ({ user, onClose, onCall }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onClose}
    >
      <View style={styles.previewDialog}>
        <View style={styles.userName}>
          <AppText>Call {user.name}</AppText>
          <IconButton
            icon="close"
            size={25}
            color={colors.primary}
            onPress={onClose}
          />
        </View>
        <Divider />
        <View style={styles.userContact}>
          <AppText>{user.contact}</AppText>
          <IconButton
            icon="phone-outline"
            size={25}
            color={colors.secondary}
            onPress={onCall}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  previewDialog: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  userName: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  userContact: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default PreviewContact;
