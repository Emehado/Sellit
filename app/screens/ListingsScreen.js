import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Modal, ToastAndroid } from "react-native";
import * as Linking from "expo-linking";

import Screen from "../components/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import colors from "../config/colors";
import PreviewContact from "../components/PreviewContact";

const ListingsScreen = ({ navigation }) => {
  const [previewContact, setPreviewContact] = useState(false);
  const [user, setUser] = useState({});

  const loadListings = () => getListingsApi.request();

  const getListingsApi = useApi(listingsApi.getListings);

  const handleSaveListing = (item) => {
    ToastAndroid.show(`${item.title} saved!`, ToastAndroid.SHORT);

    // setUser(user);
    // setPreviewContact(true);
  };

  const handleCloseContactPreview = () => setPreviewContact(false);

  const handleCall = () => {
    Linking.openURL(`tel:${user.contact}`);
    setPreviewContact(false);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.hasError && (
        <>
          <AppText>Couldn't retrieve the listings!</AppText>
          <AppButton onPress={loadListings}>Retry</AppButton>
        </>
      )}
      {<AppActivityIndicator visible={getListingsApi.loading} />}
      <Modal
        visible={previewContact}
        transparent
        onRequestClose={handleCloseContactPreview}
        animationType="slide"
      >
        <PreviewContact
          user={user}
          onCall={handleCall}
          onClose={handleCloseContactPreview}
        />
      </Modal>
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing._id.toString()}
        showsVerticalScrollIndicator={false}
        onRefresh={loadListings}
        refreshing={getListingsApi.loading}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"GHC" + item.price}
            thumbnail={item.images[0].thumbnail}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
            onSaveListing={() => handleSaveListing(item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});

export default ListingsScreen;
