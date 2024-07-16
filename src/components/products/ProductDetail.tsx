import Bag from "@assets/icons/bag.png";
import Like from "@assets/icons/love.png";
import { RootStackParamList } from "@components/drawer/DrawerNavigator";
import Chip from "@components/util-components/Chip";
import StrikethroughText from "@components/util-components/StrikethroughText";
import Strong from "@components/util-components/Strong";
import { RouteProp } from "@react-navigation/native";
import { Label, THEME_COLORS } from "@utils/constant/constant";
import { responsiveFontSize, responsiveHeight } from "@utils/style/responsive";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import ProductImageSlider from "./ImageSlider";
import { useEffect } from "react";
import { fetchProductDetails } from "src/service/product.service";
type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;
type Props = {
  route: ProductDetailScreenRouteProp;
};

export const ProductDetail = ({ route }: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const { currentProductViewing, loading, error } = useSelector(
    (state: RootState) => state.items
  );
  const { media_gallery = [], name, price_range } = currentProductViewing || {};
  const image_gallery: string[] = media_gallery.map((image) => image.url);

  // const { name, price_range, small_image, id } = currentProductViewing || {};

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);
  return (
    <View style={styles.container}>
      <ProductImageSlider images={image_gallery} />
      <View style={styles.productDetailWrapper}>
        <View style={{ flex: 2 }}>
          <Strong style={styles.title} numberOfLines={4}>
            {name}
          </Strong>
        </View>
        <View style={{ flex: 1 }}>
          <Strong style={styles.exploreBrand} numberOfLines={2}>
            {Label.EXPLORE_BRAND}
          </Strong>
        </View>
      </View>
      <View style={styles.priceDetail}>
        <View style={styles.priceView}>
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
            bgColor={THEME_COLORS["semantic.fg.accent"]}
            textColor={THEME_COLORS["semantic.bg.white"]}
          />
        </View>
        <View style={styles.cartWrapper}>
          <Image source={Like} style={styles.image} />
          <Image source={Bag} style={styles.image} />
        </View>
      </View>
      <View style={styles.strikeWrapper}>
        <>
          {price_range?.minimum_price?.discount &&
            price_range?.minimum_price?.discount.percent_off !== 0 && (
              <>
                <StrikethroughText
                  style={{
                    paddingTop: 4,
                    fontSize: 16,
                    color: THEME_COLORS["semantic.fg.weak"],
                  }}
                >
                  {price_range?.minimum_price?.regular_price?.value?.toFixed(2)}
                </StrikethroughText>
                <Text style={styles.taxText}>{Label.INCLUDING_TAX}</Text>
              </>
            )}
        </>
      </View>
    </View>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS["semantic.bg.white"],
  },
  title: {
    fontSize: responsiveFontSize(16),
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  exploreBrand: {
    color: THEME_COLORS["semantic.fg.link"],
    fontSize: responsiveFontSize(14),
    paddingLeft: 10,
    paddingRight: 10,
  },
  price: {
    fontSize: responsiveFontSize(16),
    color: THEME_COLORS["semantic.fg.text"],
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  productDetailWrapper: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    justifyContent: "space-between",
  },
  priceDetail: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    maxHeight: responsiveHeight(35),
    marginTop: 10,
  },
  priceView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cartWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    maxWidth: 30,
    maxHeight: responsiveHeight(30),
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  strikeWrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  taxText: {
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: responsiveFontSize(14),
    color: THEME_COLORS["semantic.fg.weak"],
  },
});
