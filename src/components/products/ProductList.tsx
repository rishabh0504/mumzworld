import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "src/service/product.service";
import { AppDispatch, RootState } from "src/store";
import ProductCard from "./ProductCard";
import { loadMoreProducts, setLoading } from "src/slice/product.slice";
import Loader from "@components/util-components/Loader";
import { REACHED_THRESHOLD } from "@utils/constant/constant";

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, page, totalPages } = useSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleMoreProducts = () => {
    dispatch(setLoading(true));
    if (page <= totalPages) {
      dispatch(loadMoreProducts());
    }
    dispatch(setLoading(false));
  };
  const handleReachEnd = () => {
    handleMoreProducts();
  };

  return (
    <>
      {!loading && (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          onEndReached={handleReachEnd}
          onEndReachedThreshold={REACHED_THRESHOLD}
          ListFooterComponent={
            loading && <ActivityIndicator size="large" color="#0000ff" />
          }
        />
      )}
      {loading && <Loader visible={true} />}
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 4,
  },
});

export default ProductList;
