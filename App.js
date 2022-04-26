// import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NativeRouter, Route, Routes } from "react-router-native";
import { NativeBaseProvider } from "native-base";
import List from "./components/ToDoList";
import { store } from "./redux/store";
import ToDoItem from "./components/ToDoItem";
import Users from "./components/Users";

const client = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <QueryClientProvider client={client}>
          <NativeRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ScrollView
                    maximumZoomScale={2.0}
                    contentContainerStyle={styles.container}
                    // horizontal={true}
                  >
                    <List />
                    <ToDoItem />
                  </ScrollView>
                }
              />
              <Route path="/users" element={<Users />} />
            </Routes>
          </NativeRouter>
        </QueryClientProvider>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
