import { RootStackParamList } from "@components/drawer/DrawerNavigator";
import Chip from "@components/util-components/Chip";
import StrikethroughText from "@components/util-components/StrikethroughText";
import Strong from "@components/util-components/Strong";
import { RouteProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import ProductImageSlider from "./ImageSlider";
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
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          maxHeight: 35,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Strong style={styles.price} numberOfLines={1}>
            {price_range?.minimum_price?.final_price?.currency}{" "}
            {price_range?.minimum_price?.final_price?.value?.toFixed(2)}
          </Strong>
          <Chip
            label={
              price_range?.minimum_price?.discount &&
              price_range?.minimum_price?.discount.percent_off !== 0
                ? `-${price_range?.minimum_price?.discount?.percent_off}%`
                : undefined
            }
            bgColor={"red"}
            textColor={"#ffffff"}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            source={require("../../assets/navigation/love.png")}
            style={{
              maxWidth: 30,
              maxHeight: 30,
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}
          />
          <Image
            source={require("../../assets/bag.png")}
            style={{
              maxWidth: 30,
              maxHeight: 30,
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: "row",
        }}
      >
        <StrikethroughText style={{ paddingTop: 4, fontSize: 16 }}>
          {price_range?.minimum_price?.regular_price?.value?.toFixed(2)}
        </StrikethroughText>
        <Text
          style={{
            paddingTop: 4,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
          }}
        >
          Including Tax
        </Text>
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
  price: {
    fontSize: 18,
    color: "#000000",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
