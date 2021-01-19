import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import BorderlessButton from "./BorderlessButton";

const Card = ({
  imageUrl,
  thumbnail,
  title,
  subTitle,
  onPress,
  onSaveListing,
}) => {
  return (
    <View>
      <View style={styles.card}>
        <TouchableWithoutFeedback onPress={onPress}>
          <Image
            tint="light"
            uri={imageUrl}
            preview={{ uri: thumbnail }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsText}>
            <AppText textTransform="capitalize" size={18} fontFamily="semiBold">
              {title}
            </AppText>
            <AppText fontFamily="bold" size={15} color={colors.secondary}>
              {subTitle}
            </AppText>
          </View>
          <BorderlessButton
            title="Save"
            icon="heart-outline"
            onPress={onSaveListing}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsText: {},
});

export default Card;
