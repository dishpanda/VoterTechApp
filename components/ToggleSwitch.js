import { Switch } from 'react-native'
import { StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';

const Toggle = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*To show Switch state*/}
        <Text>
          {switchValue ? 'My Achievements' : 'My Statistics'}
        </Text>
        {/*Setting the default value of state*/}
        {/*On change of switch onValueChange will be triggered*/}
        <Switch
          style={{marginTop: 100}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  width: "60%",
  height: "50%",
  alignItems: 'flex-start',
  flex: 1,
  padding: 8,
  marginTop: "10%"
  },
  textContainer: {
    marginTop: 10
  },
  textWhite: {
    color: "black",
    marginVertical: 10
  },
});

export default Toggle;