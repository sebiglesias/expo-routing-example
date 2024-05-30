import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type AppStackParamList = {
    Home: undefined;
    Details: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
