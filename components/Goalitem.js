import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function goalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text> {props.title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
