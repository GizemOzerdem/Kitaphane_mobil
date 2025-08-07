import React from "react";
import { Pressable, StyleSheet, View } from "react-native"
import { Text, TextInput } from "react-native-gesture-handler"


export const Custombutton=({buttonTex,setwidth,onpress,buttoncolor,pressedbuttoncolor}: any)=>{
    return(
                <View style={styles.textInputStyle}>
                  <Pressable  onPress={()=> onpress()} 
                  style={({pressed})=>[
                  styles.pressable,
                    {backgroundColor : pressed ? buttoncolor :pressedbuttoncolor,width:setwidth }]}>
                    

                <Text style={styles.pressabletext}>
                    {buttonTex}
                </Text>
            
                  </Pressable>  
   </View>      
       
                  
    )
}



    const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgb(240, 236, 236)',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:120,
    },
    
    hosgeltext:{
      color:'rgb(12, 11, 11)',
      fontSize:25,
      fontWeight:'bold',
marginBottom:30
     
    },
    name:{
    fontSize:23,
    fontWeight:'bold', 
    paddingBottom:20   
    },
    textınput:{
      borderWidth:1,
      width:'80%',
      height:50,
      marginVertical:10,
      borderRadius:10,
      borderColor:'rgb(7, 6, 7)',
      textAlign:'center',
      fontSize:20
    },
    pressable:{
      backgroundColor:'rgb(197, 136, 136)',
      fontWeight:'bold',
      width:300,
      height:60,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
    
    },
    pressabletext:{
      fontSize:20,
      fontWeight:'bold'
    
    },
    image:{
      width:'50%',
      height:200,
      marginVertical:50
    },
      textInputStyle:{
      borderBottomWidth:0.5,
      borderRadius:10,
      marginVertical:10,
      textAlign:'center',
      color:'blue',
      fontWeight:'bold'
    }
    
    });