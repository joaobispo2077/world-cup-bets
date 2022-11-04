import { NativeBaseProvider, StatusBar, theme } from 'native-base';
import { Roboto_400Regular,Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from 'expo-font';
import { Loading } from './src/components/Loading';
import { SignInScreen } from './src/screens/SignIn';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });


  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {isFontsLoaded ? <SignInScreen /> : <Loading />}
    </NativeBaseProvider>
  );
}
