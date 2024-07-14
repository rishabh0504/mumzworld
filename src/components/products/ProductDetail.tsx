import { RootStackParamList } from "@components/drawer/DrawerNavigator";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;
type Props = {
  route: ProductDetailScreenRouteProp;
};

export const ProductDetail = ({ route }: Props) => {
  const { id } = route.params || {};
  const navigation = useNavigation<ProductDetailScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Text>Product Detail for ID:{id}</Text>
    </View>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
