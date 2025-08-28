import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      
      <Image
        source={require('./assets/keycaps.jpg')}
        style={{ width: 500, height: 300 }}
      />

      <Text style={styles.description}>
        This is a local image
      </Text>


      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 200, height: 200, borderRadius: 125 }}
      />
      <Text style={styles.description}>
        This is a remote image
      </Text>

      <button
        onClick={() => alert('Button clicked!')}
        style={{ padding: 10, backgroundColor: '#007BFF', color: 'white', borderRadius: 5, marginTop: 20 }}
      >
        Click Me
      </button>
      <Text style={styles.description}>
        This is a button
      </Text>
      <input
        type="text"
        placeholder="Enter text here"
        style={{ padding: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginTop: 20, width: 200 }}
      />
      <Text style={styles.description}>
        This is a text input
      </Text>
      <FlatList
        data={[{ key: 'Computer' }, { key: 'Mouse' }, { key: 'Monitor' }]}
        renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 18 }}>{item.key}</Text>}
        style={{ marginTop: 20 }}
      />
      <Text style={styles.description}>
        This is a flat list
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
