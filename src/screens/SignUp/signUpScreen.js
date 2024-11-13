import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../../config/firebase'; 
import * as Animatable from 'react-native-animatable';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [fullName, setFullName] = useState(''); 
    const [birthDate, setBirthDate] = useState(''); 

    const registerUser = async () => {
        
        if (password !== confirmPassword) {
            console.error("As senhas não coincidem!");
            return;
        }

        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            
            await setDoc(doc(db, "users", user.uid), {
                fullName: fullName,
                birthDate: birthDate,
                email: email,
            });

            console.log("Usuário registrado com sucesso:", user);
        } catch (error) {
            console.error("Erro no cadastro de usuário:", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>    
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome Completo</Text>
                <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.title}>Data de Nascimento</Text>
                <TextInput
                    placeholder="Digite sua data de nascimento..."
                    style={styles.input}
                    value={birthDate}
                    onChangeText={setBirthDate}
                />

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Crie uma senha..."
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                />

                <Text style={styles.title}>Confirmar Senha</Text>
                <TextInput
                    placeholder="Confirmar senha..."
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={registerUser}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a189a'
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
        backgroundColor: 'black',
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
});