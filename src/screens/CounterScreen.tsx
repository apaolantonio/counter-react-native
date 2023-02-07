import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';
const CounterScreen = () => {
  const initialState = 10;
  const [contador, setContador] = useState(initialState);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador {contador}</Text>

      <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />
      <Fab title="+1" onPress={() => setContador(contador + 1)} position="br" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {textAlign: 'center', fontSize: 40, top: -15},
});

export default CounterScreen;
