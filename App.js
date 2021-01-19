import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import AppNavigator from "./app/Navigation/AppNavigator";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import UserContext from "./app/auth/userContext";
import secureStore from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [appLoading, setAppLoading] = useState(true);

  const restoreUser = async () => {
    const user = await secureStore.getUser();
    setUser(user);
  };

  if (appLoading)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setAppLoading(false)}
      />
    );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {!user ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
