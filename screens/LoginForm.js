import { StyleSheet, TextInput, View, Image, TouchableOpacity,Text } from "react-native";
import React, { useState } from "react";

export default function LoginForm({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.out}>

    <View style={styles.container}>
            <Image style={styles.img} source={require("../assets/logo.png")} />
      <View style={styles.inputView}>
        <TextInput
          styles={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          styles={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="black"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
              onPress={()=>{navigation.navigate("ReqList")
              console.log('heyyyyyy');}}>
              
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  out:{
    justifyContent:"center",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 400,
  },
  img: {
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#B0E0E6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    marginTop: 100,

  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#44b3cc",
    marginTop: 100,
  }
});
