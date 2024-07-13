// DrawerNavigator.tsx
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@screens/Home";
import React from "react";
import { DrawerContent } from "./DrawerContent";
const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      {/* Register more screens here */}
    </Drawer.Navigator>
  );
};
