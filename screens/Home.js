import * as React from "react";
import { Text, View } from "react-native";
import { Timer, TopHeader } from "../components/Components";
import OuterCircle from "../components/OuterCircle";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TopHeader my="false" />
      <OuterCircle>
        <Timer />
      </OuterCircle>
    </View>
  );
}

export default HomeScreen;
