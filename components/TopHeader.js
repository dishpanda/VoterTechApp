import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Linking } from "react-native";

const TopHeader = (props) => {
  if (props.my == "true") {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#003057",
            fontSize: 50,
            justifyContent: "top",
          }}
        >
          MyVoter
          <Text style={{ color: "#EAAA00" }}>Tech</Text>
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#003057",
            fontSize: 50,
            justifyContent: "flex-start",
          }}
        >
          Voter
          <Text style={{ color: "#EAAA00" }}>Tech</Text>
        </Text>
      </View>
    );
  }
};

export default TopHeader;
