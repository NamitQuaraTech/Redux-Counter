import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./counter/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
