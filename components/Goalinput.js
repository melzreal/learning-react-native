import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function goalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputView}>
    <TextInput
      placeholder="Course Goal"
      style={styles.inputContainer}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
  </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  }
});
