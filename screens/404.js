import * as React from "react";
import { Text, View } from "react-native";

function FourZeroFour() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TopHeader my="false" />
      <Text>404!</Text>
    </View>
  );
}

export default FourZeroFour;
