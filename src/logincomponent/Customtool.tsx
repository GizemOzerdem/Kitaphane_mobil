import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Text, TextInput } from "react-native-gesture-handler"



export const Customtool=({title,SecureText,OnchangeText,value,Placeholder}:any)=>{
       const [name,setName]= useState("")
       const[sifre,setSifre]= useState("")
    return(
      <View style={styles.textInputStyle}>
        <View style={styles.container}>
                  
                  <Text style={styles.name}>{title}</Text>
                  <TextInput style={styles.textınput}
                  secureTextEntry={SecureText}
                   placeholder={Placeholder}
                   onChangeText={OnchangeText}
                   value={value}
                />
                </View>
</View>
    )
}

const styles=StyleSheet.create({
      container:{
      flex:1,
      backgroundColor:'rgb(240, 236, 236)',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:120,
    },
     name:{
    fontSize:23,
    fontWeight:'bold',    
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
      textInputStyle:{
      borderBottomWidth:0.5,
      width:'100%',
      height:50,
      borderRadius:10,
      marginVertical:10,
      textAlign:'center',
      color:'blue',
      fontWeight:'bold'
    }

})