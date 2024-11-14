import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Home() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [message, setMessage] = useState('');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        // Alterar a mensagem dependendo da opção selecionada
        switch (option) {
            case 'Sim':
                setMessage('BAZINGA!');
                break;
            case 'Não':
                setMessage('Vá estudar mais');
                break;
            case 'A Terra é plana?':
                setMessage('Na verdade a Terra é quadrada');
                break;
            default:
                setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" delay={500} style={styles.header}>
                <Text style={styles.headerText}>Bem-vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={700} style={styles.content}>
                <Text style={styles.welcomeMessage}>Do you belive in The Big Bang Theory?</Text>
                
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.optionBox,
                            selectedOption === 'Sim' && styles.optionBoxSelected,
                        ]}
                        onPress={() => handleSelectOption('Sim')}
                    >
                        <Text style={styles.optionText}>Sim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.optionBox,
                            selectedOption === 'Não' && styles.optionBoxSelected,
                        ]}
                        onPress={() => handleSelectOption('Não')}
                    >
                        <Text style={styles.optionText}>Não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.optionBox,
                            selectedOption === 'A Terra é plana?' && styles.optionBoxSelected,
                        ]}
                        onPress={() => handleSelectOption('A Terra é plana?')}
                    >
                        <Text style={styles.optionText}>A Terra é plana?</Text>
                    </TouchableOpacity>
                </View>

                {message ? <Text style={styles.message}>{message}</Text> : null}
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a189a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
        color: '#ff9e00',
        fontWeight: 'bold',
    },
    content: {
        width: '90%',
        padding: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
    },
    welcomeMessage: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    optionsContainer: {
        marginTop: 20,
        width: '100%',
    },
    optionBox: {
        backgroundColor: '#ff9e00',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginVertical: 8,
        alignItems: 'center',
    },
    optionBoxSelected: {
        backgroundColor: '#ff6f00',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
