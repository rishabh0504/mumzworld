import ProductList from "@components/products/ProductList";
import { THEME_COLORS } from "@utils/constant/constant";
import { responsiveFontSize } from "@utils/style/responsive";
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
    backgroundColor: THEME_COLORS["semantic.bg.white"],
  },
  text: {
    fontSize: responsiveFontSize(24),
  },
});

export default Home;
