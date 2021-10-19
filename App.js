import React, {useState} from "react";
import { Platform, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);  
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTask(index)}>

                  <Task text={item} />

                </TouchableOpacity>
              )
            })
          }

        </View>

      </View>

      {/* Write a task section */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskMapper}>

        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    alignSelf: 'center',
  },
  items: {
    marginTop: 30,
  },
  writeTaskMapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
    textAlign: 'center',
    marginRight: 15,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },

  addText: {},
});
