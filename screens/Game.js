import * as React from "react";
import { ToggleSwitch } from "../components/Components";
import { Text, View } from "react-native";
import Badge from "../components/Badge"
import {
  Switch,
  SafeAreaView,
  StyleSheet
} from 'react-native';

function GameScreen() {
    return (
      <View style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}>
        <Switch></Switch>
     </View>
    );
  }

export default GameScreen;