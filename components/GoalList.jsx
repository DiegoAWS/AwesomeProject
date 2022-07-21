import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoalItem from './GoalItem'

const GoalList = ({ goals, deleteGoal }) => {
    return (
        <View style={styles.goalContainer}>
            {goals.length === 0
                ? <Text style={styles.noGoalLabel}>No goals yet!</Text>
                : <FlatList
                    alwaysBounceVertical={false}
                    data={goals}
                    renderItem={({ item }) => (
                        <Pressable
                            android_ripple={{ color: 'red' }}
                            onPress={() => deleteGoal(item.key)}
                            style={({ pressed }) => 
                            pressed && styles.pressedlabel}
                        >
                            <GoalItem text={item.goal} deleteGoal={deleteGoal} />
                        </Pressable>
                    )}
                />
            }
        </View>
    )
}

export default GoalList

const styles = StyleSheet.create({
    goalContainer: {
        flex: 6,
        marginTop: 20,
    },
    noGoalLabel: {

        fontWeight: 'bold',
        textAlign: 'center',
    },
    pressedlabel: {
        backgroundColor: 'red'
    }

})