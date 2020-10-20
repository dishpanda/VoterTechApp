import * as React from "react";
import { ToggleSwitch, TopHeader } from "../components/Components";
import { Text, View } from "react-native";
import Badge from "../components/Badge"
import {
  Switch,
  SafeAreaView,
  StyleSheet
} from 'react-native';

function GameScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TopHeader></TopHeader>
        <Switch></Switch>
     </View>
    );
  }

export default GameScreen;