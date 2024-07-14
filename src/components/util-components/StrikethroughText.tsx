import React from "react";
import { Text, StyleSheet } from "react-native";

const StrikethroughText = ({ children }) => {
  return <Text style={[styles.strikethrough]}>{children}</Text>;
};

const styles = StyleSheet.create({
  strikethrough: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});

export default StrikethroughText;
