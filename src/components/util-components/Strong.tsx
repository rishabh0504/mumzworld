import React from "react";
import { StyleSheet, Text } from "react-native";

const Strong = ({ children = undefined, style = {}, numberOfLines = 1 }) => {
  return (
    <Text
      style={[styles.strong, style]}
      numberOfLines={numberOfLines}
      testID="strong-text"
    >
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
