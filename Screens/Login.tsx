import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';

function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    const validEmail = 'kaneki@gmail.com';
    const validPassword = 'ken';

    if (email === validEmail && password === validPassword) {
      Alert.alert('Success Login!');
      navigation.replace('Main');
    } else {
      Alert.alert('Incorrect Email or Password!');
    }
  };

  return (
    <SafeAreaView style={styleLogin.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/21/1e/b6/211eb6d843029d18c899d131d3b0afb6.jpg',
        }}
        style={styleLogin.imgHeader}
      />
      <Text style={styleLogin.headerText}>Login</Text>
      <TextInput
        style={styleLogin.inputUser}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styleLogin.inputUser}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styleLogin.button}>
        <Button onPress={handleLogin} title="Login" color="#AF8F6F" />
      </View>
    </SafeAreaView>
  );
}

const styleLogin = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 'auto',
    backgroundColor: '#F8F4E1',
    height: '100%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imgHeader: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
  inputUser: {
    height: 'auto',
    width: '80%',
    backgroundColor: '#AF8F6F',
    color: 'white',
    borderWidth: 0.8,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
    fontSize: 20,
  },
  button: {
    width: '80%',
    margin: 10,
  },
});

export default Login;
