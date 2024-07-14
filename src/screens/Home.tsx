import { RootStackParamList } from "@components/drawer/DrawerNavigator";
import ProductList from "@components/products/ProductList";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

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
