import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const ProductImageSlider = ({ images }) => {
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    </View>
  );

  const handleNext = () => {
    flatListRef.current.scrollToIndex({ index: 1, animated: true });
  };

  const handlePrev = () => {
    flatListRef.current.scrollToIndex({ index: -1, animated: true });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <TouchableOpacity style={styles.button} onPress={handlePrev}>
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 3,
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: height / 3,
  },
});

export default ProductImageSlider;
