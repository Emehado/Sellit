import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import UploadScreen from "../components/UploadScreen";
import listingsApi from "../api/listings";
import UserContext from "../auth/userContext";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
  {
    label: "Furniture",
    id: 1,
    icon: "table-chair",
    backgroundColor: "lightcoral",
  },
  { label: "Cars", id: 2, icon: "car-sports", backgroundColor: "tomato" },
  {
    label: "Camera",
    id: 3,
    icon: "camera",
    backgroundColor: "orangered",
  },
  {
    label: "Games",
    id: 4,
    icon: "gamepad-variant",
    backgroundColor: "green",
  },
  {
    label: "Clothing",
    id: 5,
    icon: "tshirt-crew",
    backgroundColor: "teal",
  },
  { label: "Sports", id: 6, icon: "basketball", backgroundColor: "navy" },
  {
    label: "Movies & Music",
    id: 7,
    icon: "movie-roll",
    backgroundColor: "orange",
  },
  {
    label: "Books",
    id: 8,
    icon: "book-open-page-variant",
    backgroundColor: "lightsalmon",
  },
  {
    label: "Laptops & Computers",
    id: 9,
    icon: "laptop-chromebook",
    backgroundColor: "crimson",
  },
  {
    label: "Mobile Phones & Tablets",
    id: 10,
    icon: "cellphone-iphone",
    backgroundColor: "turquoise",
  },
  {
    label: "Other",
    id: 11,
    icon: "apps-box",
    backgroundColor: "darkorange",
  },
];

const ListingEditScreen = () => {
  const [location, setLocation] = useState();
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const { user } = useContext(UserContext);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSubmit = async (listing, { resetForm }) => {
    setUploading(true);
    const response = await listingsApi.addListing(
      { ...listing, location, user: user._id },
      (progress) => setProgress(progress)
    );
    setUploading(false);
    setProgress(0);

    if (!response.ok) return Alert.alert(response.problem, response.data.err);

    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen visible={uploading} progress={progress} />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
