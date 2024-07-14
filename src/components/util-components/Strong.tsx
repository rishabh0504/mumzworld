import React from "react";
import { Text, StyleSheet } from "react-native";

const Strong = ({ children, ...props }) => {
  return <Text style={[styles.strong, props]}>{children}</Text>;
};

const styles = StyleSheet.create({
  strong: {
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Strong;
