import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export const Profil=()=>{
    
    return(
        <View style={pstyles.contanier}>
              <Image style={pstyles.userpng} source={require('../../image/user.png')}/>
              <TouchableOpacity>
                 <Image style={pstyles.addbutton} source={require('../../image/add-button.png')}/>
              </TouchableOpacity>
               
                        <TextInput style={pstyles.textinput}  placeholder={'Kullanıcı adı'}
                        /><TouchableOpacity>
                 <Image style={pstyles.writeicon} source={require('../../image/write.png')}/>
              </TouchableOpacity>
              
                 <TextInput style={pstyles.textinput}  placeholder={'Biyografi'}
                        /><TouchableOpacity>
                 <Image style={pstyles.writeicon} source={require('../../image/write.png')}/>
              </TouchableOpacity>
              
        </View>
    )
}

const pstyles=StyleSheet.create({
    contanier:{
        
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        padding:70,

    },
    userpng:{
    width:'20%',
    height:30,
    padding:90, 
    },
    addbutton:{
    width:35,
    height:35,
    },name:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
    
    
    },
    textinput:{
      borderWidth:2,
      width:'80%',
      height:50,
      marginVertical:10,
      borderRadius:10,
      borderColor:'rgb(7, 6, 7)',
      textAlign:'center',
      fontSize:20
    },
    writeicon:{
     width:25,
     height:25,
     marginLeft:260,
     marginBlock:-47
}
})