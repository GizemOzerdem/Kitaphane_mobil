import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../logincomponent/LoginimPage";
import { Profil } from "../logincomponent/ProfilPage";

const Stack = createStackNavigator();


export const Usern =()=>{
    return(
       <Stack.Navigator initialRouteName="Profil" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Profil" component={Profil}/>
          </Stack.Navigator>
    )
}