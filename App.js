import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';
import DataInput from './app/components/DataInput';
import GoalList from './app/components/GoalList';

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
      <StatusBar style='light' />

      <View style={styles.appContainer}>
        <Image
          // blurRadius={10}
          fadeDuration={3000}
          source={{
            uri: "https://picsum.photos/200/300"
          }} style={styles.headerImage} />

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
  headerImage: {
    marginBottom: 20,
    height: 200,
  }

});
