// DrawerNavigator.tsx
import CustomHeaderTitle from "@components/header/CustomHeaderTitle";
import ProductDetail from "@components/products/ProductDetail";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/HomeScreen";
import React from "react";
import CustomDrawer from "./CustomDrawer";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
const ProductDetailScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  // Custom Drawer content component
  return <CustomDrawer {...props} />;
};
export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Hide header for all screens in DrawerNavigator
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen
        name="ProductDetail"
        component={ProductDetailScreenStack}
      />
    </Drawer.Navigator>
  );
};
