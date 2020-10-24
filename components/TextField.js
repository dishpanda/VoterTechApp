import React, { useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Textfield() {
    const [name, setName] = useState("");
    const [PoliticalA, setParty] = useState("");
    const [Age, setAge] = useState("");
    const [Address, setAdd] = useState("");
    const [Polling, setpoll] = useState("");

    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput style ={styles.input}
            placeholder="First,Last name"
            onChangeText={(val) => setName(val) } />
        <Text>Age</Text>
        <TextInput style ={styles.input}
            placeholder="age"
            onChangeText={(val) => setAge(val) } />
        <Text>Address</Text>
        <TextInput style ={styles.input}
            multiline
            placeholder="Address"
            onChangeText={(val) => setAdd(val) } />
        <Text>Polling Location</Text>
        <TextInput style ={styles.input}
            multiline
            placeholder="Polling Location"
            onChangeText={(val) => setpoll(val) } />
        <Text>Political Affiliation</Text>
        <TextInput style ={styles.input}
            placeholder="Political Affiliation"
            onChangeText={(val) => setParty(val) } />

        <Text>name: {name}</Text>
        <Text>Age: {Age}</Text>
        <Text>Address: {Address}</Text>
        <Text>Polling Location {Polling}</Text>
        <Text>Political Affiliation: {PoliticalA}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        width: "90%",
      height: "80%",
      alignItems: 'center',
      backgroundColor: '#EBF5FF',
      flex: 1,
      marginTop: "20%",
    },
    input : {
        borderWidth: 1,
        borderColor: "#777",
        margin: "1%",
        padding: 8,
        width: " 60%",
        height: "10%",
        backgroundColor: "#E0E0E0",
    }
  });