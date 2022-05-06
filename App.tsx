import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { RouteStack } from './screens/Mainnavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppStore from './redux/store/AppStore';
import * as Font from 'expo-font';

const store = AppStore();

// function to load the font(s)
const loadFonts = () => {
  return Font.loadAsync({
    'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
  });
};

export default function App() {
  
  const [ fontsLoaded, setFontsLoaded ] = React.useState(false);


  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={console.warn}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
        <NavigationContainer>
          <RouteStack />
        </NavigationContainer>
      </Provider>
  );
}

