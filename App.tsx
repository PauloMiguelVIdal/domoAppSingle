import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá </Text>

      <Pressable style={styles.btn}>
        <Text style={styles.textColor}>Teste</Text>
      </Pressable>

      <StatusBar style="auto" />
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
  btn: {
    width: '80%',
    height: 100,
    backgroundColor: '#2b2488',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  textColor: {
    color: '#FFFFFF',
    fontSize: 40,
  }

});
