import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.tabContainer}>
        <View>
          <Text>My Achievements</Text>
        </View>
        <View>
          <Text>My Statistics</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    containerHeader: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    textContainer: {
      marginTop: 10
    },
    textWhite: {
      color: "black",
      marginVertical: 10
    },
    tabContainer: {
      backgroundColor: "white",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      height: "20%",
      alignItems: "center",
      marginTop: 10,
      height: 40
    }
  });
  export default Header;