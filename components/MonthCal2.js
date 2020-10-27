import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const MonthCal2 = ()  => {
    const [selected, setSelected] = useState('');

    const onDayPress = (day) => {
        setSelected(day.dateString);
    }; //updates press for day


    return (
    <View style={styles.calendarContainer}>
        <Calendar
        style={[
            styles.calendar,
            {
              height: 200,
              width: 330,
              borderBottomWidth: 1,
            },
          ]}
        theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#ff8c19',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#003057',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace', //need to fix font later
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#ffc163',
              selectedTextColor: 'red',
            },
          }}>
            
        </Calendar>
    </View>
      
    );
};

const styles = StyleSheet.create({
   
    calendarContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#003057',
        borderRadius: 60,
        bottom: "55%",
        textAlign: 'center',     
    }

});

export default MonthCal2