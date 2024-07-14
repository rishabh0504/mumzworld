import ProductList from "@components/products/ProductList";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 24,
  },
});

export default Home;
