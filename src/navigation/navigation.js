import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "../screens/menu";
import Splash from "../screens/splash";

const Stack = createStackNavigator();

function MenuAppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ header: () => null, gesturesEnabled: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ header: () => null, gesturesEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MenuAppNavigation;
