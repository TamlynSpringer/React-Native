import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [learningGoals, setLearningGoals] = useState([]);

  const startAddGoalModal = () => {
    setModalVisible(true)
  };

  const endAddGoalModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setLearningGoals(currentLearningGoals => [
      ...currentLearningGoals, 
      {  text: enteredGoalText, id: Date.now().toString() }
    ]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setLearningGoals((currentLearningGoals) => {
      return currentLearningGoals.filter((goal) => goal.id !== id)
    })
  };

  return (
    <View style={styles.appContainer}>
       <Image source={require('./assets/images/logo.png')} style={styles.image} />
       <View style={styles.button}>
        <Button 
          title='Add goal' 
          color='#2430456b'
          onPress={startAddGoalModal} 
        />
       </View>
      <GoalInput 
        visible={modalVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalModal} 
      />
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
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#96b7eb'
  },
  image: {
    flex: 2,
    height: 164,
    width: 300,
    margin: 20
  },
  goalContainer: {
    flex: 4,
    width: '90%'
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 16,
  },
});

