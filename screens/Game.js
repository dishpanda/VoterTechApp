import * as React from "react";
import { Text, View } from "react-native";
import { Badge } from "../components/Components";

function GameScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Game!</Text>
        <Badge>
          </Badge>
      </View>
    );
  }

export default GameScreen;