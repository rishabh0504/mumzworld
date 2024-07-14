import Chip from "@components/util-components/Chip";
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
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/navigation/love.png")}
        style={{ width: 25, height: 25, alignSelf: "flex-end", padding: 10 }}
      />
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
          {price_range?.minimum_price?.final_price?.value?.toFixed(2)}{" "}
          {price_range?.minimum_price?.final_price?.currency}
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
});
