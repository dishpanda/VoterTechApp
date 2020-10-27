import * as React from "react";
import { Text, View } from "react-native";
import Rectangle1 from "../components/Rectangle"
import { TopHeader } from "../components/Components";

function InfoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <TopHeader my="false" />
        <Text>Information!</Text>
        <Rectangle1> </Rectangle1>
      </View>
    );
  }

export default InfoScreen;