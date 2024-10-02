import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import * as Animatable from 'react-native-animatable';

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp(){
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('user: ', userCredential);
        }).catch(error => {
            if(error.code === 'auth/email-already-in-use'){
                console.log('email já existe');
            }
            if(error.code === 'auth/invalid-email'){
                console.log('email inválido');
            }
        });
    }   
  
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>    
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                />

                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1',
    }
});
