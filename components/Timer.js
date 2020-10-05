import React, { Component, useState, useRef, useEffect } from 'react'
import { render } from 'react-dom';
import "../styles/styles.sass"

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
        <div>
            <section className="timer-container">
                <section className = "timer">
                    <div>
                        <h2 style={{justifyContent: "center", alignSelf: 'center' }}>Time Left:</h2>
                    </div>
                </section>
            </section>

            <section className= "timer-circle">
                <h1>{timerDays} Days: {timerHours} Hours : {timerMinutes} Minutes: {timerSeconds} Seconds </h1>
            </section>
        </div>
    )
};

export default Timer
