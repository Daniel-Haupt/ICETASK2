import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      // Local image stored on device
      <Image
        source={require('./assets/keycaps.jpg')}
        style={{ width: 500, height: 300 }}
      />

      <Text style={styles.description}>
        This is a local image
      </Text>

      // Remote image stored on internet
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 200, height: 200, borderRadius: 125 }}
      />
      <Text style={styles.description}>
        This is a remote image
      </Text>

      // Button with onPress functionality
      <button
        onClick={() => alert('Button clicked!')}
        style={{ padding: 10, backgroundColor: '#007BFF', color: 'white', borderRadius: 5, marginTop: 20 }}
      >
        Click Me
      </button>
      <Text style={styles.description}>
        This is a button
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333131ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
});
