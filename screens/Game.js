import * as React from "react";
import { Header } from "../components/Components";
import { Text, View } from "react-native";
import Badge from "../components/Badge"

function GameScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "start", alignItems: "center" }}>
     <Badge></Badge>
     </View>
    );
  }

export default GameScreen;