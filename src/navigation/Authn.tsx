import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../logincomponent/LoginimPage";
import { Screen } from "react-native-screens";

const Stack = createStackNavigator();


export const Authn =()=>{
    return(
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    )
}