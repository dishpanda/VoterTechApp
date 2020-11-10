import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Linking } from "react-native";
import { Timer } from "./Components";

const OuterCircle = (props) => {
  return (
    <View style={styles.outerCircleStyle}>
      <View style={styles.ringStyle}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircleStyle: {
    width: 250,
    height: 250,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#EAAA00",
    borderRadius: 1000,
    top: "35%",
    bottom: "60%",
  },
  ringStyle: {
    width: 220,
    height: 220,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 1000,
  },
});

export default OuterCircle;
