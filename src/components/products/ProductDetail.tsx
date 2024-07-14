import { RouteProp } from "@react-navigation/native";
import { Item } from "@types/product";
import { Text, View } from "react-native";
interface ProductCardProps {
  item: Item;
}
type DetailsScreenRouteProp = RouteProp<ProductCardProps, "ProductDetail">;

export const ProductDetail: React.FC<ProductCardProps> = (item) => {
  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
};
export default ProductDetail;
