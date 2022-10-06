import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./screens/Welcome";
import LoginForm from "./screens/LoginForm";
import SignUpForm from "./screens/SignUpForm";
import ReqList from "./screens/ReqList";
import EditprofileForm from "./screens/EditprofileForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="LoginForm"
          component={LoginForm}
          style={styles.haha}
        />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="ReqList" component={ReqList} />
        <Stack.Screen name="EditprofileForm" component={EditprofileForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  haha: {
    backgroundColor: "white",
  },
});
