import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, theme } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
        <Text>Open up App.js to start working on your app!! !</Text>
    </NativeBaseProvider>
  );
}
