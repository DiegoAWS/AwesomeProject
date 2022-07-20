import { useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import DataInput from './components/DataInput';
import GoalList from './components/GoalList';


export default function App() {

  const [goal, setGoal] = useState('')

  const [goals, setGoals] = useState([])

  const addGoal = () => {
    setGoals(oldGoals => [...oldGoals, {
      key: Math.random().toString() + "-" + Date.now(),
      goal
    }])
     setGoal('')
  }

  const handleChange = (text) => {
    setGoal(text)
  }


  return (
    <View style={styles.appContainer}>
      <DataInput onAddGoal={addGoal} goal={goal} handleChange={handleChange}/>
      <GoalList goals={goals}/>
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
