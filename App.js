import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DataInput from './components/DataInput';
import GoalList from './components/GoalList';


export default function App() {


  const [showAddGoal, setShowAddGoal] = useState(false)
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

  const hideModal = () => {
    setShowAddGoal(false)
  }


  return (
    <>
      <StatusBar />

      <View style={styles.appContainer}>
        <Button title="Add New Goal" color={"purple"} onPress={() => { setShowAddGoal(true) }} />
        <DataInput onAddGoal={addGoal} showAddGoal={showAddGoal} hideModal={hideModal} />
        <GoalList goals={goals} deleteGoal={deleteGoal} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'black',
  },

});
