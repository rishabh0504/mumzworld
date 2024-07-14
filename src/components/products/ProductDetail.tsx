import { RootStackParamList } from "@components/drawer/DrawerNavigator";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import ProductImageSlider from "./ImageSlider";
import Strong from "@components/util-components/Strong";
type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;
type Props = {
  route: ProductDetailScreenRouteProp;
};

export const ProductDetail = ({ route }: Props) => {
  const { currentProductViewing, loading, error } = useSelector(
    (state: RootState) => state.items
  );
  const {
    brand_info,
    categories,
    is_yalla,
    name,
    price,
    price_range,
    base_price_range,
    product_label,
    small_image,
    stock_status,
  } = currentProductViewing || {};
  console.log(JSON.stringify(currentProductViewing));
  return (
    <View style={styles.container}>
      <ProductImageSlider images={[small_image?.url]} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 2 }}>
          <Strong style={styles.title} numberOfLines={4}>
            {name}
          </Strong>
        </View>
        <View style={{ flex: 1 }}>
          <Strong style={styles.exploreBrand} numberOfLines={2}>
            Explore Brands
          </Strong>
        </View>
      </View>
    </View>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  exploreBrand: {
    color: "blue",
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
