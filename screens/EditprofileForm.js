import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function EditprofileForm() {
  return (
    <View style={styles.container}>
      <Text>EditprofileForm</Text>
      <Pressable style={styles.btn}>
        <Text>edit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  btn: {
    width: "20%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#44b3cc",
  },
});
