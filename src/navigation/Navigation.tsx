import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Single from '../screens/Single';
import Multiplayer from '../screens/Multiplayer';
import Learning from '../screens/Learning';
import Profile from '../screens/Profile';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Single: undefined;
  Multiplayer: undefined;
  Learning: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Single"
            component={Single}
            options={{headerShown: false, gestureEnabled: false}}
          />
           <Stack.Screen
            name="Multiplayer"
            component={Multiplayer}
            options={{headerShown: false, gestureEnabled: false}}
          />
           <Stack.Screen
            name="Learning"
            component={Learning}
            options={{headerShown: false, gestureEnabled: false}}
          />
           <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false, gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navigation;
