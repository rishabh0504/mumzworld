import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

const ProductCard = (product) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.product.small_image.url }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={2}>
          {product?.product?.name.length < 33
            ? `${product?.product?.name}`
            : `${product?.product?.name.substring(0, 32)}...`}
        </Text>

        <Text style={styles.price}>
          {product?.product?.price_range?.minimum_price?.final_price?.value?.toFixed(
            2
          )}{" "}
          {product?.product?.price_range?.minimum_price?.final_price?.currency}
        </Text>
      </View>
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
    alignItems: "center",
    width: width / 2,
    height: 200,
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
