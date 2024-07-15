import ProductList from "@components/products/ProductList";
import InputWithIcon from "@components/util-components/InputWithIcon";
import Loader from "@components/util-components/Loader";
import { THEME_COLORS } from "@utils/constant/constant";
import { responsiveFontSize } from "@utils/style/responsive";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "src/service/product.service";
import {
  aplyFilterWithQuery,
  resetFilterQuery,
  setLoading,
} from "src/slice/product.slice";
import { AppDispatch, RootState } from "src/store";

const Home: React.FC = () => {
  const [query, setQuery] = useState<string | undefined>();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.items);
  // Based on debouncing, implemented handleSearchQuery
  const handleSearchQuery = (query: string) => {
    setQuery(query);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      searchAndLoad(query);
    }, 500); // As per deboucing , time interval is 500ms

    const searchAndLoad = (query: string) => {
      dispatch(setLoading(true));
      if (query) {
        dispatch(aplyFilterWithQuery(query));
      } else {
        dispatch(resetFilterQuery());
      }
      dispatch(setLoading(false));
    };
  };
  useEffect(() => {
    // unmounting clear time out by default
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // fetchProducts the products for the first time
    dispatch(setLoading(true));
    dispatch(fetchProducts());
    dispatch(setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <InputWithIcon
        placeholder="What are you looking for?"
        value={query}
        onChangeText={handleSearchQuery}
      />
      {loading && <Loader visible={true} />}
      {!loading && <ProductList query={query} />}
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
