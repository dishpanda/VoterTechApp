import * as React from "react";
import { Text, View } from "react-native";
import { MonthCal2, TopHeader } from "../components/Components";

function CalendarScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <TopHeader my="false" /> 
        </View>
        <MonthCal2/>
      </View>
      
      
    );
  }

export default CalendarScreen;