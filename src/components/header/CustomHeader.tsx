import { DrawerActions, useNavigation } from "@react-navigation/native";
import { THEME_COLORS } from "@utils/constant/constant";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import Menu_Logo from "@assets/icons/menu.png";
import Search_Logo from "@assets/icons/search.png";
import Logo from "@assets/logo.png";
import Bag from "@assets/icons/bag.png";

const CustomHeader: React.FC = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, { width: width - 40 }]}>
      <View style={styles.columnLeft}>
        <TouchableOpacity
          onPress={openDrawer}
          style={{ justifyContent: "center" }}
        >
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: THEME_COLORS["semantic.bg.white"],
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
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  logoImage: {
    resizeMode: "contain",
    marginLeft: 18,
    marginRight: 18,
    height: 100,
    width: 100,
  },
  searchImage: {
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 10,
    height: 25,
    width: 25,
  },
  bagImage: {
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 10,
    height: 25,
    width: 25,
  },
});
