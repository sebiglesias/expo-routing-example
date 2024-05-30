import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import { AuthContext } from '../context/AuthContext';

type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

type Props = {
    navigation: SignInScreenNavigationProp;
};

function SignInScreen({ navigation }: Props) {
    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
            <Button title="Sign In" onPress={signIn} />
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

export default SignInScreen;
