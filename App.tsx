import { DrawerNavigator } from "@components/drawer/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "src/store";
import Logo from "./src/assets/logo.png";
import MascotGIF from "./src/assets/mascot.gif";

const { width } = Dimensions.get("window");

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.containerWrapper}>
      {loading && (
        <View style={styles.container}>
          <Image source={MascotGIF} style={[styles.mascotImage]} />
          <Image source={Logo} style={[styles.image, { width: width * 0.8 }]} />
        </View>
      )}
      {!loading && (
        <Provider store={store}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </Provider>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerWrapper: {
    flex: 1,
  },
  mascotImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  image: {
    height: 200,
    resizeMode: "contain", // Set a fixed height
  },
});
