import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "native-base";
import { useNavigate } from "react-router-native";
import { useGetUser } from "../api/useGetUsers";

export default Users = () => {
  const navigate = useNavigate();
  const { data } = useGetUser();
  const users = data?.data;
  return (
    <ScrollView
      contentContainerStyle={styles.users}
      vertical={true}
      maximumZoomScale={2.0}
    >
      {users?.map((user) => (
        <Text style={{ alignItems: "center" }}>{user.username}</Text>
      ))}
      <Button onPress={() => navigate("/")} mt="10px">
        Back to my to do list
      </Button>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  users: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
