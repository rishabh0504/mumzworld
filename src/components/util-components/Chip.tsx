import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
interface ChipProps {
  label: string;
  bgColor: string;
  textColor: string;
}
const Chip = (chipItem: ChipProps) => {
  const { label, bgColor, textColor } = chipItem || {};
  return (
    <>
      {label && (
        <TouchableOpacity style={[styles.chip, { backgroundColor: bgColor }]}>
          <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    fontSize: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Chip;
