import { THEME_COLORS } from "@utils/constant/constant";
import React from "react";
import { StyleSheet, Text } from "react-native";

const StrikethroughText = ({ children = undefined, style = {} }) => {
  return (
    <Text style={[styles.strikethrough, style]} testID="strikethrough-text">
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  strikethrough: {
    textDecorationLine: "line-through",
    color: THEME_COLORS["semantic.fg.disabled"],
  },
});

export default StrikethroughText;
