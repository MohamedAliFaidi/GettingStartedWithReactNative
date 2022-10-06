import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Pressable
} from "react-native";
export default function ConfirmCancelMap() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>patient information</Text>
      </View>
      <View style={styles.in}>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
      </View>
      {/* <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Reject</Text>
        </TouchableOpacity>
        </View> */}
      <View style={styles.viewforbutton}>
        <Pressable
          style={styles.buttonBottom}
          title="Log In"
          color="#077871"
        //   onPress={() => navigation.navigate("LoginForUser")}
        >
          <Text style={styles.ButtonText}>Log In</Text>
        </Pressable>
        <Pressable
          style={styles.buttonBottom}
          title="Register"
        //   onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.ButtonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    marginTop: 20,

    width: 480,
    height: 450,
  },
  info: {
    borderColor: "blue",
    marginBottom: 10,
    borderTopLeftRadius: 200,
  },
  in: {},
//   buttons: {
//     flexDirection: "row",
//   },
//   loginBtn: {
//     marginTop: 200,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#33A2FF",
//   },
buttonBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 40,
    elevation: 3,
    color: "#077871",
    borderColor: "#077871",
    backgroundColor: "#077871",
    margin: 10,
  },
  ButtonText: {
    color: "white",
  },
  viewforbutton: {
    display: "flex",
    flexDirection: "row"
  }
});
