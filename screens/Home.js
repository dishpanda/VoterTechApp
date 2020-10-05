import * as React from "react";
import { Text, View } from "react-native";
import { Timer } from "../components/Components"
import "../styles/styles.sass"

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", color: "#003057", fontSize: 50 }}>
        Voter
        <Text style={{ color: "#EAAA00" }}>Tech</Text>
      </Text>
      <span class="circle"></span>
      <Timer />
    </View>
  );
}

export default HomeScreen;
