import Loader from "@components/util-components/Loader";
import { REACHED_THRESHOLD, THEME_COLORS } from "@utils/constant/constant";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "src/service/product.service";
import { loadMoreProducts } from "src/slice/product.slice";
import { AppDispatch, RootState } from "src/store";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, page, totalPages } = useSelector(
    (state: RootState) => state.items
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleMoreProducts = () => {
    if (isLoadingMore || page >= totalPages) return;
    setIsLoadingMore(true);
    dispatch(loadMoreProducts());
    setIsLoadingMore(false);
  };

  const handleReachEnd = () => {
    handleMoreProducts();
  };

  return (
    <>
      {loading ? (
        <Loader visible={true} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          onEndReached={handleReachEnd}
          onEndReachedThreshold={REACHED_THRESHOLD}
          ListFooterComponent={
            isLoadingMore && (
              <ActivityIndicator
                size="large"
                color={THEME_COLORS["semantic.fg.disabled"]}
              />
            )
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 4,
  },
});

export default ProductList;
