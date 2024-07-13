import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CustomHeaderTitle: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100, // Adjust based on your logo size
    height: 40, // Adjust based on your logo size
    resizeMode: "contain",
  },
});

export default CustomHeaderTitle;
