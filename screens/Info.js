import * as React from "react";
import { Text, View } from "react-native";
import Rectangle1 from "../components/Rectangle"

function InfoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "start", alignItems: "center" }}>
        <Text>Information!</Text>
        <Rectangle1> <Text> Hi</Text> </Rectangle1>
      </View>
    );
  }

export default InfoScreen;