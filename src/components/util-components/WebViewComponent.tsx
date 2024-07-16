import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import WebView from "react-native-webview";

const WebViewComponent = ({ htmlContent }) => {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
});

export default WebViewComponent;
