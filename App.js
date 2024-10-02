import React, {useEffect, useState} from'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import SignIn from './src/screens/SignIn';

export default function App() {
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // useEffect(() =>{
  //   const unsubscribe = auth().onAuthStateChanged(_user => {
  //     setUser(_user);
  //   });
    
  //   return unsubscribe; 
  // }, []);
    return (
        <NavigationContainer>
           {/* {user ? <SignIn/> : <HomeScreen/>} */}
            <Routes/>
        </NavigationContainer>
    );
}; 