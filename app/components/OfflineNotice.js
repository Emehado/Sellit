import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import Icon from "./Icon";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Icon
          name="access-point-network-off"
          backgroundColor={colors.primary}
        />
        <AppText size={25} fontFamily={"bold"} color={colors.white}>
          No Internet Connection
        </AppText>
      </View>
    );
  return null;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    // position: "absolute",
    backgroundColor: colors.primary,
    marginTop: Constants.statusBarHeight,
    zIndex: 10,
  },
});

export default OfflineNotice;
