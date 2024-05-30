import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../navigation/AppNavigator';
import { AuthContext } from '../context/AuthContext';

type HomeScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            <Button title="Sign Out" onPress={signOut} />
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

export default HomeScreen;
