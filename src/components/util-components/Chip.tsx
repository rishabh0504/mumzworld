import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
interface ChipProps {
  label: string;
  bgColor: string;
  textColor: string;
}
const Chip = (chipItem: ChipProps) => {
  const { label, bgColor, textColor } = chipItem || {};
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        { backgroundColor: bgColor }, // Apply dynamic background color
      ]}
    >
      <Text style={[styles.label, styles.labelSelected, { color: textColor }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  chipSelected: {
    borderWidth: 1,
    borderColor: "#333",
  },
  label: {
    fontSize: 12,
    color: "#333",
    fontWeight: "bold",
  },
  labelSelected: {
    color: "#fff",
  },
});

export default Chip;
