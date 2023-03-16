import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [learningGoals, setLearningGoals] = useState([]);

  const startAddGoalModal = () => {
    setModalVisible(true)
  }

  const addGoalHandler = (enteredGoalText) => {
    setLearningGoals(currentLearningGoals => [
      ...currentLearningGoals, 
      {  text: enteredGoalText, id: Date.now().toString() }
    ]);
    console.log(enteredGoalText)
  };
  console.log(learningGoals)

  const deleteGoalHandler = (id) => {
    setLearningGoals((currentLearningGoals) => {
      return currentLearningGoals.filter((goal) => goal.id !== id)
    })
    console.log('Delete')
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.text}>Goals App</Text>
      <Button 
        title='Add new goal' 
        color='#ddd' 
        onPress={startAddGoalModal} 
      />
      <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList 
          data={learningGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler} 
              />
            )
          }}
          alwaysBounceVertical={false}>
          keyExtractor={(item, index) => {
            return item.id
          }};   
        </FlatList>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16
  },
  text: {
    margin: 16, 
    borderWidth: 1, 
    borderColor: '#000', 
    padding: 16
  },
  goalContainer: {
    flex: 5,
  },
});

