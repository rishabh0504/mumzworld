import { apiClient } from "@utils/api-client/apiClient";
import { Product } from "@utils/Types";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
const fetchProducts = async () => {
  try {
    const response = await apiClient.get<Product[]>("mumzrn/product-list-lite");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
export default function App() {
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await apiClient.get<Product[]>(
          "mumzrn/product-list-lite"
        );
        console.log(JSON.stringify(response.data.data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
