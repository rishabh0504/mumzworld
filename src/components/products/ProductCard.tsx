import { RootStackParamList } from "@components/drawer/DrawerNavigator";
import Chip from "@components/util-components/Chip";
import StrikethroughText from "@components/util-components/StrikethroughText";
import Strong from "@components/util-components/Strong";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Item } from "@types/product";
import { CHIPSYALLA, COUNTRIES } from "@utils/constant";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { currentProductViewing } from "src/slice/product.slice";
import { AppDispatch } from "src/store";
const { width } = Dimensions.get("screen");
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface ProductCardProps {
  product: Item;
}
const ProductCard = (productItem: ProductCardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch: AppDispatch = useDispatch();

  const { product } = productItem || {};
  const { small_image, name, price_range, is_yalla, id } = product || {};
  const { minimum_price } = price_range || {};
  const { discount, final_price, regular_price } = minimum_price || {};

  const handleNavigate = (item: Item) => () => {
    dispatch(currentProductViewing(item));
    navigation.navigate("ProductDetail", { id: item.id });
  };

  return (
    <TouchableHighlight
      onPress={handleNavigate(product)}
      underlayColor={"#efefef"}
    >
      <View style={styles.card}>
        <View style={[styles.offer_favourite_wrapper]}>
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
                maxWidth: 25,
                maxHeight: 25,
                justifyContent: "flex-end",
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <Image
          source={{ uri: small_image.url }}
          style={styles.image}
          resizeMode="cover"
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
            marginTop: 20,
            maxHeight: 30,
          }}
        >
          <View style={{ flex: 3 }}>
            <Text style={styles.title} numberOfLines={2}>
              {name.length < 24 ? `${name}` : `${name.substring(0, 24)}...`}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../assets/navigation/cart.png")}
              style={{
                width: 25,
                height: 25,
                justifyContent: "flex-end",
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            maxHeight: 30,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Strong style={styles.price} numberOfLines={1}>
              {final_price?.currency} {final_price?.value?.toFixed(2)}
            </Strong>
          </View>
          <View style={{ flex: 1 }}>
            <StrikethroughText style={{ paddingTop: 4, fontSize: 12 }}>
              {regular_price?.value?.toFixed(2)}
            </StrikethroughText>
          </View>
        </View>
        <View>
          {Array.isArray(is_yalla) && is_yalla.includes(COUNTRIES.AE) && (
            <Chip
              label={CHIPSYALLA[COUNTRIES.AE]}
              bgColor={"#FFC107"}
              textColor={"#000000"}
            />
          )}
        </View>
      </View>
    </TouchableHighlight>
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
    fontSize: 12,
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
    maxHeight: 40,
  },
});
