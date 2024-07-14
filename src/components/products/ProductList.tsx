import { Item, Root } from "@types/product";
import { apiClient } from "@utils/api-client/apiClient";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard"; // Adjust the path as necessary
import { API_ENDPOINTS } from "@utils/constant";

const ProductList = () => {
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: any = await apiClient.get<Root>(
          API_ENDPOINTS.GET_PRODUCTS
        );
        const root: Root = response;
        if (Array.isArray(root.data.products.items)) {
          setProducts(root.data.products.items);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductCard product={item} />}
      numColumns={2}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 4,
  },
});

export default ProductList;
