import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome/welcomeScreen';
import SignIn from '../screens/SignIn/signInScreen';
import SignUp from '../screens/SignUp/signUpScreen';
import Home from '../screens/Home/homeScreen';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
                <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{  headerShown: false}}
            />
                <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{  headerShown: false}}
            />
               <Stack.Screen
                 name="SignIn"
                 component={SignIn}
                 options={{  headerShown: false}}
            /> 
                <Stack.Screen
                 name="Home"
                 component={Home}
                 options={{  headerShown: false}}
            />
             
           
        </Stack.Navigator>
    )
}