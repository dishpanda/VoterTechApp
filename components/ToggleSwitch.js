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
    <SafeAreaView style={{flex: 2}}>
      <View style={styles.container}>
        {/*To show Switch state*/}
        <Text>
          {switchValue ? 'My Achievements' : 'My Statistics'}
        </Text>
        {/*Setting the default value of state*/}
        {/*On change of switch onValueChange will be triggered*/}
        <Switch
          style={{marginTop: 30}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Toggle;