import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalItem = ({ text }) => {
    return (
        <View style={styles.goal}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goal: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    goalText: {
        fontWeight: 'bold',

    }
})