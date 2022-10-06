import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native';

function Welcome({ navigation }) {

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')} />
      <Image
        style={styles.tuto}
        source={require('../assets/splash.png')
        } />
      <StatusBar style="auto" />
      <View
        style={styles.viewforbutton}
      >
        <Pressable
          style={styles.buttonBottom}
          title="Log In"
          color="#077871"
          onPress={() => navigation.navigate('LoginForm')}>
          <Text
            style={styles.ButtonText}>Log In</Text>
        </Pressable>
        <Pressable
          style={styles.buttonBottom}
          title="Register"
          onPress={() => navigation.navigate('SignUpForm')}>
          <Text
            style={styles.ButtonText}
          >Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 130,
    height: 150,
    top: 10,
    borderRadius: 0,
  },
  tuto: {
    width: 330,
    height: 350,
    top: 10,
    Button: 300,

    borderRadius: 50,
  },
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
    backgroundColor: "#44b3cc",
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

export default Welcome