import { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'
import AddGoalImg from '../assets/images/addGoal.png'

const DataInput = ({ onAddGoal, showAddGoal, hideModal }) => {
    const [goal, setGoal] = useState('')

    const handleAddGoal = () => {
        if (goal.length > 0) {
            onAddGoal(goal)
            setGoal('')
            hideModal()
        }
    }

    return (
        <Modal
            visible={showAddGoal}
            animationType='slide'
        >
            <View
                style={styles.inputContainer}>
                    <Image source={AddGoalImg} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your goal'
                    value={goal}
                    onChangeText={setGoal}
                />
                <View style={styles.buttonsRow}>
                    <Button
                        disabled={!goal}
                        onPress={handleAddGoal}
                        color='purple'
                        title='Add goal' />
                    <Button
                        title='Cancel'
                        color='red'
                        onPress={hideModal}
                    />
                </View>

            </View>
        </Modal>
    )
}

export default DataInput

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 24,
        flex: 1,
        backgroundColor: 'black',
    },
    textInput: {
        width: '80%',
        padding: 10,
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'purple',
        borderWidth: 1,
        borderColor: 'purple',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        paddingTop: 10,
    },
    image: {
        width: '90%',
        resizeMode: 'contain',

    }
})