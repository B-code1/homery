import {TouchableOpacity, Text} from 'react-native';

const Button=({text})=>{
    return(
        <TouchableOpacity style={{backgroundColor:'#7540EE', padding:10, borderRadius:8, height:60, margin:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', fontSize:20, textAlign:'center', fontWeight:'bold'}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;