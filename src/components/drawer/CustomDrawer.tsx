import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { THEME_COLORS } from "@utils/constant";
import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface MenuItem {
  id: string;
  title: string;
  screen: string;
  icon: ImageSourcePropType;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Home",
    screen: "Home",
    icon: require("../../assets/navigation/home.png"),
  },
  {
    id: "2",
    title: "Sale",
    screen: "Sale",
    icon: require("../../assets/navigation/sale.png"),
  },
  {
    id: "3",
    title: "Wishlist",
    screen: "Wishlist",
    icon: require("../../assets/navigation/love.png"),
  },
  {
    id: "4",
    title: "My Account",
    screen: "MyAccount",
    icon: require("../../assets/navigation/account.png"),
  },
];

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.navigation.navigate(item.screen)}
    >
      <Image source={item.icon} style={{ height: 20, width: 20 }} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS["semantic.bg.white"],
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
  },
  itemText: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default CustomDrawer;
