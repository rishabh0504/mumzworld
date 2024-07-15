import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { THEME_COLORS } from "@utils/constant/constant";
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
import Home_Logo from "@assets/icons/home.png";
import Sale_Logo from "@assets/icons/sale.png";
import Love_Logo from "@assets/icons/love.png";
import Account_Logo from "@assets/icons/account.png";
import { responsiveFontSize } from "@utils/style/responsive";

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
    icon: Home_Logo,
  },
  {
    id: "2",
    title: "Sale",
    screen: "Sale",
    icon: Sale_Logo,
  },
  {
    id: "3",
    title: "Wishlist",
    screen: "Wishlist",
    icon: Love_Logo,
  },
  {
    id: "4",
    title: "My Account",
    screen: "MyAccount",
    icon: Account_Logo,
  },
];

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const navigateTo = (item) => () => {
    props.navigation.navigate(item.screen);
  };
  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item} onPress={navigateTo(item)}>
      <Image source={item.icon} style={styles.drawerImage} />
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
    fontSize: responsiveFontSize(14),
    paddingLeft: 10,
    paddingRight: 10,
  },
  drawerImage: { height: 20, width: 20 },
});

export default CustomDrawer;
