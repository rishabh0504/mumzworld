import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import Bag from "@assets/icons/bag.png";
import Menu_Logo from "@assets/icons/menu.png";
import Search_Logo from "@assets/icons/search.png";
import Logo from "@assets/logo.png";
import { responsiveHeight } from "@utils/style/responsive";

const CustomHeader: React.FC = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, { width: width - 40 }]}>
      <View style={styles.columnLeft}>
        <TouchableOpacity onPress={openDrawer} style={styles.center}>
          <Image source={Menu_Logo} style={styles.menuImage} />
        </TouchableOpacity>
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.columnRight}>
        <Image source={Search_Logo} style={styles.searchImage} />
        <Image source={Bag} style={styles.bagImage} />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
    height: responsiveHeight(60),
  },
  columnLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  columnRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuImage: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  logoImage: {
    resizeMode: "contain",
    marginLeft: 18,
    marginRight: 18,
    height: 100,
    width: 150,
  },
  searchImage: {
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 10,
    height: 30,
    width: 30,
  },
  bagImage: {
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 10,
    height: 30,
    width: 30,
  },
  center: { justifyContent: "center" },
});
