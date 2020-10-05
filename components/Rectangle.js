import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

function Rectangle1() {
    return (
        <View style={styles.container}>
       
            <View style={styles.Rectangle}>
                <ImageBackground source ={require("../assets/ballot.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text style={styles.innertext}>Check Voter Elligibility</Text>
                </View> 
                </ImageBackground>
            </View>
            <View style={styles.Rectangle}>
                <ImageBackground source ={require("../assets/vbox.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text style={styles.innertext}>Find a Polling Place</Text>
                </View> 
                </ImageBackground>
            </View>
            <View style={styles.Rectangle}>
                <ImageBackground source ={require("../assets/voting.jpg")} style ={styles.containeri}>
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}> 
                    <Text style={styles.innertext}>Request Absentee Ballot!</Text>
                </View> 
                </ImageBackground>
            </View>
     
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
      width: "100%",
      height: "90%",
      alignItems: 'center',
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
        tintColor: "",
    },
    innertext: {
        marginTop: "1%",
        fontWeight: "bold",
        fontSize: 25,
    }
  
});
export default Rectangle1;