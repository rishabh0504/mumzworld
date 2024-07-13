import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const CustomHeaderTitle: React.FC = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, { width: width - 40 }]}>
      <View style={styles.coloumnLeft}>
        <TouchableOpacity
          onPress={openDrawer}
          style={{ justifyContent: "center" }}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={styles.menuImage}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.coloumnRight}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.searchImage}
        />
        <Image
          source={require("../../assets/bag.png")}
          style={styles.bagImage}
        />
      </View>
    </View>
  );
};
export default CustomHeaderTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
  },
  coloumnLeft: { flex: 2, flexDirection: "row", justifyContent: "flex-start" },
  coloumnRight: { flex: 2, flexDirection: "row", justifyContent: "flex-end" },
  menuImage: { height: 25, width: 25, resizeMode: "contain" },
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
