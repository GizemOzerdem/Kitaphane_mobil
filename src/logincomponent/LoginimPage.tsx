import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from 'react';
import { Customtool } from "./Customtool";
import { Custombutton} from "./Custombutton";
  
export const Login = ({navigation}: any) => {
      const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
      const [name,setName]= useState("")
      const[sifre,setSifre]= useState("")
      const [result,setResult]=useState("")
     return (
        <View style={styles.container}>
    
          <Image style={styles.image} source={ require('../../image/login.png') }/>
          <Text> {result}</Text>

       <Text style={styles.name}> 
            Kullanıcı Adı 
            </Text>
        
            <Customtool
             title="Kullacı Adı"
             SecureText={false}
             OnchangeText={setName}
             value={name}
             Placeholder='Enter your Email'
              
            />

              <Text style={styles.name}> 
            Şifre
            </Text>
            
            <Customtool 
             title="Şifre"
             SecureText={true}
             OnchangeText={setSifre}
             value={sifre}
            Placeholder='Enter your Password'

            />
                 <Custombutton
                 buttonTex="Giriş Yap"
                 setwidth='300'
                 onpress={()=>navigation.navigate("Profil")}
                 buttoncolor="gray"
                 pressedbuttoncolor="pink"
                 />
          <Text style={{fontSize:20,fontWeight:'bold',marginVertical:25}}>Hesabınız Yok mu?</Text>

                 <Custombutton
                 buttonTex="Üye Ol"
                 setwidth='300'
                 onpress={()=>setIsModalVisible(true)}
                   buttoncolor="gray"
                 pressedbuttoncolor="pink"
                 
                 />  
                 
                         < Modal transparent
                           animationType="fade"
                           visible={isModalVisible}>
                 
                           <View style={{
                             backgroundColor: 'hsl(0, 47.20%, 89.60%)',
                             position: 'absolute',
                             height: 500,
                             width: '100%',
                             borderTopLeftRadius: 40,
                             borderTopRightRadius: 40,
                             bottom: 0,
                             flex: 1,
                             justifyContent: 'center',
                             alignItems: 'center'
                           }}>
                             <Text style={styles.hosgeltext}>Hesap Oluştur</Text>
                             <Text style={styles.name}>Kullanıcı Adı </Text>
                             <TextInput style={styles.textınput} placeholder={'Kullanıcı adı oluşturun'}></TextInput>
                             <Text style={styles.name}>Şifre</Text>
                             <TextInput style={styles.textınput} secureTextEntry={true} placeholder={'Şifre oluşturun'}></TextInput>
                             <Pressable onPress={() => setIsModalVisible(false)}
                               style={({ pressed }) => [
                                 styles.pressable,
                                 { backgroundColor: pressed ? 'gray' : 'rgb(167, 75, 75)' }]}>
                 
                               <Text style={styles.pressabletext}>
                                 Üye Ol
                               </Text>
                 
                             </Pressable>
                           </View>
                         </Modal>
        </View>

     );
    }
    
    const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgb(240, 236, 236)',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:150,
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
      marginVertical:100,
      marginBottom:20

    },
    });
