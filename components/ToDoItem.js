// import {useSelector} from "@reduxjs/toolkit"
import { useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/reducer";

const ToDoItem = () => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleComplete = (plan) => {
    dispatch(deleteTodo(plan));
  };
  return (
    <View>
      {todos.map((todo, index) => (
        <View style={styles.itemTodo} key={index}>
          <Text>{todo.item}</Text>
          <Button onPress={() => handleComplete(todo)} title="Done" />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemTodo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#E9EFC0",
    marginTop: 10,
    width: 150,
  },
});
export default ToDoItem;
