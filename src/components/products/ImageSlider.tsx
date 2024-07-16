import { THEME_COLORS } from "@utils/constant/constant";
import { responsiveHeight } from "@utils/style/responsive";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
const { width: viewportWidth } = Dimensions.get("window");

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const ProductImageSlider = ({ images }) => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / viewportWidth
    );
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
    }
  };
  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        horizontal
        data={images}
        renderItem={renderItem}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={200}
        snapToInterval={viewportWidth}
      />

      <View style={styles.pagination}>
        <View style={styles.paginationContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(height / 3),
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    alignItems: "center",
  },
  paginationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  paginationDot: {
    width: 6,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  paginationDotActive: {
    backgroundColor: THEME_COLORS["semantic.fg.link"],
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: responsiveHeight(300),
  },
});

export default ProductImageSlider;
