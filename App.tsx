import useMascotAnimation from "@hooks/useMascotAnimation";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Logo from "./src/assets/logo.png";
import MascotImage from "./src/assets/mascot.png"; // Assuming your mascot image path is correct
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function App() {
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  const onAnimationComplete = () => {
    setAnimationCompleted(true);
  };

  const translateYAnim = useMascotAnimation(onAnimationComplete);

  return (
    <View style={styles.container}>
      {!animationCompleted && (
        <View style={styles.container}>
          <Animated.Image
            source={MascotImage}
            style={[
              styles.mascotImage,
              {
                transform: [{ translateY: translateYAnim }],
              },
            ]}
          />
          <Image source={Logo} style={[styles.image, { width: width * 0.8 }]} />
          <StatusBar style="auto" />
        </View>
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
  mascotImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain",
  },
  image: {
    height: 200,
    resizeMode: "contain", // Set a fixed height
  },
});
