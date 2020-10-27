import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import Calendar from 'react-calendar';

const MonthCal = ()  => {
    const [date, setDate] = useState(new Date());

    //function to change date
    const onChange = date => {
      this.setDate({ date });
    }

    return (
      <div>
        <Calendar
          onChange={onChange}
          value={date}
        />
      </div>
    );
};

export default MonthCal;