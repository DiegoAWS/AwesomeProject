import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DataInput from './components/DataInput';
import GoalList from './components/GoalList';


export default function App() {



  const [goals, setGoals] = useState([])

  const addGoal = (goal) => {
    setGoals(oldGoals => [...oldGoals, {
      key: Math.random().toString() + "-" + Date.now(),
      goal
    }])

  }

  const deleteGoal = (key) => {
    setGoals(oldGoals => {
      return oldGoals.filter(goal => goal.key !== key)
    });
  }


  return (
    <View style={styles.appContainer}>
      <DataInput onAddGoal={addGoal} />
      <GoalList goals={goals} deleteGoal={deleteGoal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

});
