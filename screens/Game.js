import * as React from "react";
import { Badge, ToggleSwitch, TopHeader } from "../components/Components";
import { Text, View } from "react-native";
import BadgeBox1 from "../components/BadgeBox"
import TwoTabs from "../components/TwoTabs"
import {
  Switch,
  SafeAreaView,
  StyleSheet
} from 'react-native';

function GameScreen() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <TopHeader></TopHeader>
        <TwoTabs></TwoTabs>

        {/*<Switch></Switch>
        <BadgeBox1></BadgeBox1>*/}
     </View>
    );
  }

export default GameScreen;