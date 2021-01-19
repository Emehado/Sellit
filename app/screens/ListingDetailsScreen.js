import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";
import MapView from "react-native-maps";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import IconButton from "../components/IconButton";
import BorderlessButton from "../components/BorderlessButton";
import Divider from "../components/lists/Divider";
import AppButton from "../components/AppButton";

const ListingDetailsScreen = ({ route, navigation }) => {
  const listings = route.params;

  const handlePreviewContact = () => {
    console.log("ji");
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewImage", listings.images)}
          activeOpacity={0.7}
        >
          <IconButton
            style={styles.backButton}
            icon="keyboard-backspace"
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <Image
            preview={{ uri: listings.images[0].thumbnail }}
            tint="light"
            uri={listings.images[0].url}
            style={styles.image}
          />
          <View style={styles.galleryCountView}>
            {listings.images.map((image, index) => (
              <View
                key={index}
                style={{ ...styles.galleryCount, opacity: 0.8 }}
              ></View>
            ))}
          </View>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View style={styles.horizontal}>
            <View>
              <AppText textTransform="capitalize" fontFamily="semiBold">
                {listings.title}
              </AppText>
              <AppText style={styles.price} color={colors.secondary}>
                ${listings.price}
              </AppText>
            </View>
            <BorderlessButton
              title="Contact"
              icon="phone-outline"
              onPress={handlePreviewContact}
              color="secondary"
            />
          </View>
          <Divider />
          <AppButton>Send Message</AppButton>
          <AppText style={styles.description}>{listings.description}</AppText>

          <View style={styles.userContainer}>
            <ListItem
              title="Eme hado"
              subtitle="5 Listings"
              image={require("../assets/mosh.jpg")}
              onPress={() => console.log("hi")}
            />
            <Divider />
          </View>
        </View>
        <View style={styles.map}>
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 10,
  },
  price: {
    marginBottom: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
  galleryCountView: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 1,
  },
  galleryCount: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    alignSelf: "center",
    marginLeft: 5,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 1,
  },
  description: {
    lineHeight: 30,
  },
  map: {
    alignItems: "center",
    height: 300,
    width: "100%",
  },
  mapView: {
    height: "80%",
    width: "100%",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ListingDetailsScreen;
