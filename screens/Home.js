import * as React from "react";
import { Text, View } from "react-native";
import { Timer, TopHeader } from "../components/Components";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TopHeader my="false" />
      <Timer />
    </View>
  );
}

export default HomeScreen;
