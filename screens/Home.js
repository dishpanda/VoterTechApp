import * as React from "react";
import { Text, View } from "react-native";
import { Timer } from "../components/Components"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", color: "#003057", fontSize: 50, justifyContent: "top" }}>
        Voter
        <Text style={{ color: "#EAAA00" }}>Tech</Text>
      </Text>
      <Timer />
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
  />
    </View>
  );
}

export default HomeScreen;
