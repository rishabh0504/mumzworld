import ProductList from "@components/products/ProductList";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
