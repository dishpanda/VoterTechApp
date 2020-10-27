import React, { Component} from 'react'
import { StyleSheet, View, Text, ImageBackground, Linking} from 'react-native';
import { Badge} from "../components/Components";

function BadgeBox1() {
    return (
        <View style={styles.container}>
          <Badge></Badge>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "90%",
      height: "90%",
      marginTop: 20,
      backgroundColor: 'white',
    },
  });
  export default BadgeBox1;