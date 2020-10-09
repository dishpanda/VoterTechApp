import React, { Component, useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import { render } from 'react-dom';

const Timer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00'); //default values

    let interval = useRef(); //react import

    const startTimer = () => {
        const countDownDate = new Date('November 3, 2020 00:00:00').getTime();

        interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeLeft = countDownDate - currentTime;
            
            const days = Math.floor( timeLeft / (1000 * 60 * 60 * 24)); //1000 = 1 second
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((timeLeft % (1000 * 60) / (1000)));

            if (timeLeft < 0) {
                //time runs out
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }; 
 
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }); //instantiating, componentDidMount

    return (
        <View style={styles.timerContainer}>
            <Text style = {styles.timeTitle}>
                Time Left:
            </Text>
        
            <Text style = {styles.timeLeft}>
                {timerDays} Days {"\n"}{timerHours} Hours {"\n"}{timerMinutes} Minutes {"\n"}{timerSeconds} Seconds 
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
   
    timerContainer: {
        width: "125px",
        height: "125px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#003057',
        borderRadius: "50%",
        top: "40%",
        bottom: "60%"

           
    }, 

    timeTitle: {
        fontWeight: "bold",
        color: '#FFFFFF',
        textAlign: "center",
        fontSize: "14px",
    },

    timeLeft: {
        color: '#FFFFFF',
        fontSize: "10px",
        textAlign: "center"

    }

});


export default Timer
