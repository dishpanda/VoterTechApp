import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  PersonalScreen,
  HomeScreen,
  GameScreen,
  CalendarScreen,
  InfoScreen,
  FourZeroFour,
} from "../screens/Screens";
import { Ionicons } from "@expo/vector-icons/";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Info") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Personal") {
            iconName = "ios-person";
          } else if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Calendar") {
            iconName = "ios-calendar";
          } else if (route.name === "Game") {
            iconName = "logo-game-controller-b";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#EAAA00",
        inactiveTintColor: "#003057",
        labelPosition: "below-icon",
      }}
    >
      <Tab.Screen name="Personal" component={PersonalScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Game" component={GameScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
