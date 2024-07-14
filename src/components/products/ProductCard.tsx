import Chip from "@components/util-components/Chip";
import StrikethroughText from "@components/util-components/StrikethroughText";
import Strong from "@components/util-components/Strong";
import { Item } from "@types/product";
import { CHIPSYALLA, COUNTRIES } from "@utils/constant";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

interface ProductCardProps {
  product: Item;
}
const ProductCard = (productItem: ProductCardProps) => {
  const { product } = productItem || {};
  const { small_image, name, price_range, is_yalla } = product || {};
  const { minimum_price } = price_range || {};
  const { discount, final_price, regular_price } = minimum_price || {};
  return (
    <View style={styles.card}>
      <View style={styles.offer_favourite_wrapper}>
        <View style={{ justifyContent: "flex-start" }}>
          <Chip
            label={
              discount && discount.percent_off !== 0
                ? `-${discount?.percent_off}%`
                : undefined
            }
            bgColor={"red"}
            textColor={"#ffffff"}
          />
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Image
            source={require("../../assets/navigation/love.png")}
            style={{
              width: 25,
              height: 25,
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              padding: 10,
            }}
          />
        </View>
      </View>

      <Image
        source={{ uri: small_image.url }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={2}>
          {name.length < 33 ? `${name}` : `${name.substring(0, 32)}...`}
        </Text>

        <Text style={styles.price}>
          <Strong>
            {final_price?.currency} {final_price?.value?.toFixed(2)}
          </Strong>
          {"  "}
          <StrikethroughText
            children={regular_price?.value?.toFixed(2)}
          ></StrikethroughText>
        </Text>
      </View>
      {Array.isArray(is_yalla) && is_yalla.includes(COUNTRIES.AE) && (
        <Chip
          label={CHIPSYALLA[COUNTRIES.AE]}
          bgColor={"#FFC107"}
          textColor={"#000000"}
        />
      )}
    </View>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  card: {
    borderRadius: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    width: width / 2,
    padding: 20,
    maxWidth: "auto",
    marginTop: 2,
    marginBottom: 2,
  },
  image: {
    height: 100,
    width: "100%",
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    color: "#888",
    paddingTop: 5,
  },
  offer_favourite_wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
