import * as React from "react";
import { Text, View } from "react-native";
import Textfield from "../components/TextField"
function PersonalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Text>Personal!</Text>
      <Textfield></Textfield>
    </View>
  );
}

export default PersonalScreen;