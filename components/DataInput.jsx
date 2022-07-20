import { Button, StyleSheet, TextInput, View } from 'react-native'

const DataInput = ({ onAddGoal, goal, handleChange }) => {
    return (
        <View
            style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your goal'
                value={goal}
                onChangeText={handleChange}
            />
            <Button
                disabled={!goal}
                onPress={onAddGoal}
                title='Add goal' />
        </View>
    )
}

export default DataInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        padding: 10,
        flex: 1,
    },
})