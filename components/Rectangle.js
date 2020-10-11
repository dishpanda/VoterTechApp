import React, { Component} from 'react'
import { StyleSheet, View, Text, ImageBackground, Linking} from 'react-native';


function Rectangle1() {
    return (
        <View style={styles.container}>
            
            <View style={styles.Rectangle}>
                <ImageBackground source ={require("../assets/ballot.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text style={styles.innertext}
                    onPress={() => Linking.openURL('https://www.vote.org/am-i-registered-to-vote/')}>
                        Check Voter Elligibility</Text>
                </View> 
                </ImageBackground>
            </View>
            <View style={styles.Rectangle}>
                <ImageBackground source ={require("../assets/vbox.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text style={styles.innertext}
                    onPress={() => Linking.openURL("https://www.mvp.sos.ga.gov/MVP/mvp.do")}>Find a Polling Place</Text>
                </View> 
                </ImageBackground>
            </View>
            <View style={styles.Rectangle}>
                <ImageBackground source ={require("../assets/voting.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text style={styles.innertext}
                    onPress={() => Linking.openURL("https://ballotrequest.sos.ga.gov/")}>Request Absentee Ballot!</Text>
                </View> 
                </ImageBackground>
            </View>
     
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
      width: "50%",
      height: "90%",
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
      flex: 1,
      marginTop: "20%",
    },
    Rectangle: {
      width: "90%",
      height: "30%",
      marginBottom: "5%",
      flex: 1,
    },
    containeri: {
        width:"100%",
        height: "100%",
        tintColor: "blue",
    },
    innertext: {
        marginTop: "1%",
        fontWeight: "bold",
        fontSize: 25,
    }
  
});
export default Rectangle1;