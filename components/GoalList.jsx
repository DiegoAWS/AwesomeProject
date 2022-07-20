import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoalItem from './GoalItem'

const GoalList = ({goals}) => {
    return (
        <View style={styles.goalContainer}>
            {goals.length === 0
                ? <Text style={styles.noGoalLabel}>No goals yet!</Text>
                : <FlatList
                    alwaysBounceVertical={false}
                    data={goals}
                    renderItem={({ item }) =>  (<GoalItem text={item.goal} />)}
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

})