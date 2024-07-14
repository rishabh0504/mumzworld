import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { resetCurrentProductViewing } from "src/slice/product.slice";
import { AppDispatch } from "src/store";

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
        <Image
          source={require("../../assets/navigation/back.png")}
          style={{ height: 22, width: 25 }}
        />
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
});

export default CustomHeaderWithBack;
