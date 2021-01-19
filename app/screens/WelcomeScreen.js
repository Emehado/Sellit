import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.logoContanier}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText fontFamily="bold" textTransform="capitalize">
          Don't Need It Anymore?
        </AppText>
        <AppText fontFamily="bold" textTransform="capitalize">
          Sell It
        </AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton onPress={() => navigation.navigate("Login")}>
          Login
        </AppButton>
        <AppButton
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AppButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContanier: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
