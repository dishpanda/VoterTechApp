import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

function Rectangle1() {
    return (
        <View style={styles.container}>
       
            <ImageBackground src ={require("../assets/ballot.jpg")} style={styles.Rectangle} >
                <View style={{ flex: 1, justifyContent: "start", alignItems: "center" }}> 
                    <Text>Check Voter Eligibility</Text>
                </View>  
            </ImageBackground>
            <View style={styles.Rectangle} />
            <View style={styles.Rectangle} />
     
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
  
      flex: 1,
      justifyContent: 'start',
      width: "85%",
      height: "90%",
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
    Rectangle: {
  
      width: "70%",
      height: "20%",
      backgroundColor: 'lightblue',
      marginBottom: "5%",
    }
  
});
export default Rectangle1;