import React from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import AuthApi from "../api/auth";
import { NavigationContext } from "@react-navigation/native";

const regx = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  contact: Yup.string()
    .matches(regx, "Phone number is invalid")
    .required()
    .label("Phone number"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const handleSubmit = async (user) => {
    console.log(user);
    const response = await AuthApi.register(user);
    if (!response.ok) return alert(response.data.err);

    Alert.alert("Account created Succesfully", "Login to continue");
    navigation.navigate("Login");
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", contact: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField name="contact" placeholder="Contact" icon="phone-outline" />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
