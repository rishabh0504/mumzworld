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
      <View style={styles.coloumn}>
        <TouchableOpacity
          onPress={openDrawer}
          style={{ justifyContent: "center" }}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={{ height: 25, width: 25, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/logo.png")}
          style={{
            resizeMode: "contain",
            marginLeft: 18,
            marginRight: 18,
            height: 100,
            width: 100,
          }}
        />
      </View>
      <View style={styles.coloumn}>
        <Image
          source={require("../../assets/search.png")}
          style={{
            resizeMode: "contain",
            marginLeft: 10,
            marginRight: 10,
            height: 25,
            width: 25,
          }}
        />
        <Image
          source={require("../../assets/bag.png")}
          style={{
            resizeMode: "contain",
            marginLeft: 10,
            marginRight: 10,
            height: 25,
            width: 25,
          }}
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
  coloumn: { flex: 2, flexDirection: "row", justifyContent: "flex-end" },
});
