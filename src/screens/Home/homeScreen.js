import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation} from '@react-navigation/native'
export default function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View delay={600} animation="flipInY" style={styles.texto}>

                <Text style={styles.textoStilo}>Seja Bem Vindo</Text>
                 </Animatable.View>
        <View style={styles.containerLogo}>
          
        </View>

      
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FF6400'
    },
    texto:{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 100,
        borderRadius: 30,
        marginTop: 100,
    
    },
    textoStilo:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: '#dark-gray'
    },
   
})
