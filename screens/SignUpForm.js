import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from "./CuseTogglePasswordVisibility";

export default function SignUpForm({navigation}) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [LicenseNumber, setLicenseNumber] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  return (
    <View style={styles.out}>
      <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="First Name"
            placeholderTextColor="black"
            onChangeText={(FirstName) => setFirstName(FirstName)}
          ></TextInput>
          
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Last Name"
            placeholderTextColor="black"
            onChangeText={(LastName) => setLastName(LastName)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(Email) => setEmail(Email)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            autoCapitalize="none"
            enablesReturnKeyAutomatically={true}
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={passwordVisibility}
            placeholderTextColor="black"
            onChangeText={(Password) => setPassword(Password)}
          ></TextInput>
          <Pressable onPress={handlePasswordVisibility}>
    <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
  </Pressable>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="black"
            onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="License Number"
            placeholderTextColor="black"
            onChangeText={(LicenseNumber) => setLicenseNumber(LicenseNumber)}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.loginBtn}
        onPress={()=>navigation.navigate("ReqList")}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  out: {
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
});
