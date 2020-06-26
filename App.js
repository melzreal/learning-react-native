import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), value: goalTitle}]);
  };
  const removeGoalHandler = goalID => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalID);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={ itemData => (
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value}
          /> )}
        
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  }
});
