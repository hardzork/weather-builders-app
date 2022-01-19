import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Favorites } from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Favoritos" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
