import * as React from "react";
import { Badge, ToggleSwitch, TopHeader } from "../components/Components";
import { Text, View } from "react-native";
import {
  Switch,
  SafeAreaView,
  StyleSheet
} from 'react-native';

function GameScreen() {
    return (
      <View style={{justifyContent: "center", alignItems: "center", position: "absolute", top:0, left:0, right:0}}>
        <TopHeader></TopHeader>
        <Switch></Switch>
     </View>
    );
  }

export default GameScreen;