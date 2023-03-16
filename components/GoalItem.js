import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GoalItem = ({ onDeleteGoal, text, id }) => {

  return (
    <View style={styles.goalItem}>
      <Pressable 
        onPress={onDeleteGoal.bind(this, id)}
        android_ripple={{color: '#ddd'}}
        style={({ pressed }) => pressed && styles.pressedItem}>
          <View style={styles.item}>
            <Text style={styles.goalText}>{text}</Text>
            <MaterialCommunityIcons name="delete" size={24} color="black" />
          </View>
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    color: '#fff', 
  },
  goalText: {
    marginLeft: 10,
  },
  pressedItem: {
    opacity: 0.5,
  }
})