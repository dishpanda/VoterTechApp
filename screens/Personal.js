import * as React from "react";
import { Text, View } from "react-native";
import Textfield from "../components/TextField";
import { TopHeader } from "../components/Components";

function PersonalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TopHeader my="false" />
      <Text>Personal!</Text>
      <Textfield></Textfield>
    </View>
  );
}

export default PersonalScreen;