import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable
  } from 'react-native';
import { useState } from 'react';

const Login = (props) => {
    const [userName, userNameChange] = useState('');
    const [password, passwordChange] = useState('');

    const OnLogin = () => {
        console.log(`Username is ${userName}`);
        console.log(`Password is ${password}`);
    }

    return (
        <View style={[styles.loginContainer, props.mediaQueries.isSmallTablet && styles.midWidth, 
        props.mediaQueries.isTablet && styles.largeWidth]}>
            <View style={styles.userNameContainer}>
                <Text style={styles.text}>User Name</Text>
                <TextInput
                style={styles.inputs}
                onChangeText={userNameChange}
                value={userName}
                /> 
            </View>
            <View style={styles.passwordContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput
                style={styles.inputs}
                onChangeText={passwordChange}
                value={password}
                secureTextEntry="true"
                />
            </View>
            <Pressable
            style={!(userName && password) ? styles.disabledLoginButton : styles.loginButton}
            onPress={OnLogin}
            disabled={!(userName && password)}
            >
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        borderWidth: 2,
        borderColor: 'black',
        padding: '1rem',
        paddingTop: '2rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%'
      },
    inputs: {
        borderWidth: 1,
        borderColor: 'black',
        height: 35
    },
    disabledLoginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'gray',
        width: '100%'
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: '100%'
    },
    loginText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text: {
        fontSize: 15,
        marginBottom: 5
    },
    userNameContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 20
    },
    passwordContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 20
    },
    midWidth: {
        width: '50%'
    },
    largeWidth: {
       width: '25%'
    }
});


export default Login;
