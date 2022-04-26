import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "native-base";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import { addTodo } from "../redux/reducer";

const List = () => {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTodo = () => {
    if (todoItem) {
      dispatch(addTodo({ item: todoItem }));
      setTodoItem("");
    } else {
      alert("Please enter your plan");
    }
  };
  return (
    <View>
      <Text style={{ textAlign: "center" }}>To do list with react native</Text>
      <View style={styles.view}>
        <Input
          width="250px"
          borderRadius="10px"
          onChangeText={setTodoItem}
          value={todoItem}
          placeholder="Enter your plan here"
          InputRightElement={<Button onPress={handleTodo}>Create</Button>}
        />
        <Button
          ml="10px"
          onPress={() => navigate("/users")}
          colorScheme="secondary"
        >
          Navigate to users
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    marginTop: 20,
  },
  // button: {
  //   width: 10,
  //   padding: 10,
  //   borderRadius: 10,
  // },
});
export default List;
