import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "src/service/product.service";
import { AppDispatch, RootState } from "src/store";
import ProductCard from "./ProductCard";
import { BATCH_SIZE, REACHED_THRESHOLD } from "@utils/constant/constant";

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <FlatList
      data={items}
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
