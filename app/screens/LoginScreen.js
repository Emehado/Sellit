import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppFormField,
  SubmitButton,
  AppForm,
} from "../components/forms";
import AuthApi from "../api/auth";
import UserContext from "../auth/userContext";
import secureStore from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const userContext = useContext(UserContext);

  const handleSubmit = async ({ email, password }) => {
    try {
      setLoginFailed(false);
      const response = await AuthApi.login(email, password);
      if (!response.ok) return setLoginFailed(true);

      const user = jwtDecode(response.data);
      setLoginFailed(false);
      secureStore.storeToken(response.data);
      userContext.setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email or password!"
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email Address"
        />

        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          secureTextEntry
          placeholder="Password"
          name="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;
