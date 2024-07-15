import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import { resetCurrentProductViewing } from "src/slice/product.slice";
import { AppDispatch } from "src/store";
import Back_Logo from "@assets/icons/back.png";

const CustomHeaderWithBack = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  const goBack = () => {
    dispatch(resetCurrentProductViewing());
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={Back_Logo} style={styles.backNavigation} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 18,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backNavigation: { height: 22, width: 25 },
});

export default CustomHeaderWithBack;
