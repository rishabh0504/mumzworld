import Loader from "@components/util-components/Loader";
import { REACHED_THRESHOLD, THEME_COLORS } from "@utils/constant/constant";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreProducts } from "src/slice/product.slice";
import { AppDispatch, RootState } from "src/store";
import ProductCard from "./ProductCard";
interface ProductListProps {
  query?: string;
}
const ProductList: React.FC<ProductListProps> = ({ query }) => {
  const dispatch: AppDispatch = useDispatch();
  const { withFilterPagenation, withoutFilterPagenation, loading } =
    useSelector((state: RootState) => state.items);
  const { products, page, totalPages } = query
    ? withFilterPagenation
    : withoutFilterPagenation;

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleMoreProducts = (query) => {
    if (isLoadingMore || page >= totalPages) return;
    setIsLoadingMore(true);
    dispatch(loadMoreProducts(query));
    setIsLoadingMore(false);
  };

  const handleReachEnd = (query: string) => () => {
    handleMoreProducts(query);
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
          onEndReached={handleReachEnd(query)}
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
