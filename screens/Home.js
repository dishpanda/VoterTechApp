import * as React from "react";
import { Text, View } from "react-native";
import { Timer } from "../components/Components"

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", color: "#003057", fontSize: 50, justifyContent: "top" }}>
        Voter
        <Text style={{ color: "#EAAA00" }}>Tech</Text>
      </Text>
      <span class="circle"></span>
      <Timer />
    </View>
  );
}

export default HomeScreen;
