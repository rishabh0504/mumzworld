import Blank_Rating from "@assets/icons/rating_blank.png";
import Filled_Rating from "@assets/icons/rating_fill.png";
import { MAX_RATING } from "@utils/constant/constant";
import { Image, StyleSheet, View } from "react-native";
interface RatingProps {
  rating: number;
}
const createRatings = (rating: number) => {
  const finalRating = Math.ceil(rating);
  const ratingImages = [];
  for (let index = 1; index <= MAX_RATING; index++) {
    ratingImages.push(
      <Image
        source={index <= finalRating ? Filled_Rating : Blank_Rating}
        key={index}
        style={styles.imageStyle}
      />
    );
  }
  return ratingImages;
};
const Rating: React.FC<RatingProps> = ({ rating }) => {
  const ratingTemplate = createRatings(rating);
  return <View style={styles.container}>{ratingTemplate}</View>;
};
export default Rating;
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  imageStyle: { width: 20, height: 20 },
});
