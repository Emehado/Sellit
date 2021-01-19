import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

const ListItem = ({
  title,
  subtitle,
  image,
  size = 70,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <Image
              source={image}
              style={{
                ...styles.avatar,
                height: size,
                width: size,
                borderRadius: size / 2,
              }}
            />
          )}
          <View style={styles.detailsContainer}>
            <AppText fontFamily="semiBold" numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText
                fontFamily="extra-light"
                numberOfLines={1}
                style={styles.subtitle}
              >
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  avatar: {
    marginRight: 10,
  },
  subtitle: {
    fontSize: 17,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
