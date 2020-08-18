
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState();
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, 
      {key: Math.random().toString(), value: enteredGoal}
    ]);
  };

  return (
    <View style={styles.root}>
      <GoalInput 
        onChange={goalInputHandler}
        goalValue={enteredGoal}
        onPress={addGoalHandler}/>
      <FlatList 
        data ={courseGoals}
        renderItem ={itemData => (
          <GoalItem title={itemData.item.value} />
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    padding: 36
  }, 
});
