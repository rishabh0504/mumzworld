import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import CustomHeaderWithBack from "@components/header/BackNavigation";
import ProductDetail from "@components/products/ProductDetail";

import Home from "@screens/Home";
import CustomDrawer from "./CustomDrawer";
import CustomHeader from "@components/header/CustomHeader";

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { id: number };
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();
export const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <CustomHeader />,
        headerLeft: () => null,
      }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{
        headerTitle: () => <CustomHeaderWithBack />,
        headerLeft: () => null,
      }}
    />
  </Stack.Navigator>
);
export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (
  props
) => {
  return <CustomDrawer {...props} />;
};
export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};
