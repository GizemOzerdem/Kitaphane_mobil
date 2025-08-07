import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Usern } from "./Usern";
import { Authn } from "./Authn";


export const Rootn =()=>{

    const isAuth = false

    return(
        <NavigationContainer>
            {
                !isAuth
                ? <Authn/>
                :<Usern/>
            }
        </NavigationContainer>
    )
}