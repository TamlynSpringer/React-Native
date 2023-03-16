import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ onDeleteGoal, text, id }) => {

  

  return (
    <View style={styles.goalItem}>
      <Pressable 
        onPress={onDeleteGoal.bind(this, id)}
        android_ripple={{color: '#ddd'}}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
      </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 8,
    margin: 8,
    backgroundColor: '#6d87b1',
  },
  goalText: {
    padding: 8,
    color: '#fff', 
  },
  pressedItem: {
    opacity: 0.5,
  }
})