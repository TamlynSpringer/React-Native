import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native"

const GoalInput = ({ onAddGoal, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Goal...'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        >
        </TextInput>
        <View>
          <Button
            onPress={addGoalHandler} 
            title='Add' 
          />
          <Button title='X' />

        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})