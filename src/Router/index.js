
   
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../screens/User'
import Album from '../screens/Album';
import Photo from '../screens/Photo';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'User'} component={User} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={'Album'} component={Album} options={{
                    headerShown: false,
                }} />
                 <Stack.Screen name={'Photo'} component={Photo} options={{
                    headerShown: false,
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;