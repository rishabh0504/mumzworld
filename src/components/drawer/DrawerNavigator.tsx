// DrawerNavigator.tsx
import CustomHeaderWithBack from "@components/header/BackNavigation";
import CustomHeaderTitle from "@components/header/CustomHeaderTitle";
import ProductDetail from "@components/products/ProductDetail";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import React from "react";
import CustomDrawer from "./CustomDrawer";
export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { id: number };
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <CustomHeaderTitle />,
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
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
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
