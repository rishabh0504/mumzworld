import React from "react";
import { StyleSheet, Text } from "react-native";

const Strong = ({ children, style, numberOfLines }) => {
  return (
    <Text style={[styles.strong, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  strong: {
    fontWeight: "bold",
  },
});

export default Strong;
