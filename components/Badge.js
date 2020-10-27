import React, { Component} from 'react'
import { StyleSheet, View, Text, ImageBackground, Linking} from 'react-native';

//I'm going to change this to a grid container

function Badge() {
    return (
        <View style={styles.container}>
            <View style={styles.Badge}>
                <ImageBackground source ={require("../assets/ballot.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text>
                        You Registered to Vote!</Text>
                </View> 
                </ImageBackground>
            </View>
            <View style={styles.Badge}>
                <ImageBackground source ={require("../assets/voting.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text>
                        You Volunteered at a Poll!</Text>
                </View> 
                </ImageBackground>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
      width: "90%",
      height: "90%",
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flex: 1,
      marginTop: "20%",
    },
    Badge: {
      width: "50%",
      height: "50%",
      marginBottom: "5%",
      flex: 1,
    },
    containeri: {
        width:"100%",
        height: "100%",
        tintColor: "#F5FCFF",
    },
    innertext: {
        marginTop: "1%",
        fontWeight: "bold",
        fontSize: 25,
    }
  
});
export default Badge;