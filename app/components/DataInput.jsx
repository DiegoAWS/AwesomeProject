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
            transparent={true}

        >
            <View style={styles.modalContainer}>
                <View
                    style={styles.inputContainer}>
                    <Image source={AddGoalImg} style={styles.image} />
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
            </View>
        </Modal>
    )
}

export default DataInput

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    inputContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 24,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.76,
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
        width: '30%',
        resizeMode: 'contain',

    }
})