import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';

type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignUp'>;

type Props = {
    navigation: SignUpScreenNavigationProp;
};

function SignUpScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignUpScreen;
