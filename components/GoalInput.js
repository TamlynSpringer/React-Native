import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
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
        <Image source={require('../assets/images/mountain.png')} style={styles.image} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Goal...'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        >
        </TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler} 
              title='☑' 
              color='#243045'
            />
          </View>
          <View style={styles.button}>
            <Button
            onPress={onCancel} 
            title='☒'
            color='#243045' 
          />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#96b7eb'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#243045',
    width: '100%',
    marginRight: 16,
    padding: 12,
    backgroundColor: '#2430456b',
    color: '#fff',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '10%',
    marginHorizontal: 8,
    fontSize: 30,
    borderRadius: 20,
  },
  image: {
    height: 82,
    width: 200,
    margin: 20
  }
})