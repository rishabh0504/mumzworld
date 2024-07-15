import React from "react";
import { Modal, View, StyleSheet, Image } from "react-native";
import LOADER_GIF from "@assets/loader.gif";
import { THEME_COLORS } from "@utils/constant/constant";
import { responsiveHeight } from "@utils/style/responsive";
interface LoaderProps {
  visible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
      testID="gif-loader-modal"
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Image
            source={LOADER_GIF}
            testID="gif-loader-image"
            style={styles.loaderImage}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicatorWrapper: {
    backgroundColor: THEME_COLORS["semantic.bg.white"],
    padding: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loaderImage: {
    width: 100,
    height: responsiveHeight(100),
  },
});

export default Loader;
