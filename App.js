import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Login from './src/components/Login';


const App = () => {
  // const [number, setNumber] = useState(0);

  // function handlePress() {
  //   setNumber(parseInt(Math.random() * 10000, 10) % 100);
  // }
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App
