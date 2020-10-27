import * as React from "react";
import { Badge, ToggleSwitch, TopHeader } from "../components/Components";
import { Text, View } from "react-native";
import BadgeBox1 from "../components/BadgeBox"
import {
  Switch,
  SafeAreaView,
  StyleSheet
} from 'react-native';

function GameScreen() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <TopHeader></TopHeader>
        <Switch></Switch>
        <BadgeBox1></BadgeBox1>
     </View>
    );
  }

export default GameScreen;