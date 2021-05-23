import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from "./components/Home"
import ClassicModus from './components/Classic';
import Customize from "./components/customize"
import CustomModus from "./components/Custom";
import CustomizeTime from "./components/CustomizeTime";
import TimeModus from './components/Time';


const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Classic" component={ClassicModus} />
        <Stack.Screen name="Customize" component={Customize} />
        <Stack.Screen name="CustomizeTime" component={CustomizeTime} />
        <Stack.Screen name="Custom" component={CustomModus} />
        <Stack.Screen name="Time" component={TimeModus} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;