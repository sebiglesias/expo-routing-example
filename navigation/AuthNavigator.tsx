import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
