import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

interface MenuItem {
  key: string;
  title: string;
  screen: string;
}

const menuItems: MenuItem[] = [
  { key: "1", title: "Home", screen: "Home" },
  { key: "2", title: "Profile", screen: "Profile" },
  { key: "3", title: "Settings", screen: "Settings" },
  // Add more items as needed
];

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.navigation.navigate(item.screen)}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 18,
  },
});

export default CustomDrawer;
