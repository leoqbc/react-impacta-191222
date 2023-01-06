import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sub}>
        <Text style={styles.center}>Open up App.js to start teste 123! uaihsu iau aiushduiash diuhasd iuhasidu iuash iudhaisuhd</Text>
      </View>
      <View style={styles.viewButton}>
        <Button
            style={styles.primary}
            title="Clique aqui"
            color="#005C5D"
            onPress={() => alert('Alerta do proprio android')}
          />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003A5D',
    alignItems: 'center',
    fontSize: '1.2rem',
    height: '100%'
  },
  sub: {
    marginTop: 100,
    width: 300,
    height: 100,
    backgroundColor: '#EEEEEE'
  },
  center: {
    textAlign: 'center',
    padding: 10
  },
  viewButton: {
    marginTop: 10,
    width: 300,
    borderRadius: 10
  },
});
