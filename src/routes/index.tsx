import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home, Search, Favorites } from "../screens";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap =
              "alert-circle-outline";
            if (route.name === "Seu Local") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Buscar") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Favoritos") {
              iconName = focused ? "md-star" : "md-star-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Seu Local" component={Home} />
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Favoritos" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
