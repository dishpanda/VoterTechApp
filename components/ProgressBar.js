import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text, ImageBackground, Linking } from "react-native";
import * as Progress from 'react-native-progress';
import ProgressBarAnimated from 'react-native-progress-bar-animated';



const percentage = 0.7
const barWidth = Dimensions.get('screen').width - 30;
const state = {
    progress: .2,
    progressWithOnComplete: 0,
    progressCustomized: 0,
}

const ProgressBar = () => {
    return(
        <Progress.Bar 
            progress={state.progress} 
            width={barWidth} 
            height={50}
            animate={true}
            animationType='timing'
            borderRadius='9'
            color="#003057"
            style={styles.progressBar}> 
                
        </Progress.Bar>

        


    );

};

const styles = StyleSheet.create({
    progressBar: {
        marginBottom: 10,
        marginTop: 10
    }
  });

export default ProgressBar;