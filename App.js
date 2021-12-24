import React, {useState} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import CardsDeck from './component/deck/cardsDeck'
import {NativeBaseProvider, Box} from 'native-base';
import Navbar from './component/navbar/navbar'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/pages/home'
import TaroDeck from './component/pages/taroDeck'

const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <NativeBaseProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home}
                                      options={{ title: 'Колода' }}/>
                        <Stack.Screen name="TaroDeck" component={TaroDeck}
                                      options={{ title: 'Карты' }}/>
            </Stack.Navigator>
        </NavigationContainer>
            </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
        },
    })
;

export default App