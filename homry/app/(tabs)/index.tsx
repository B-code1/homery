
import { View, Image, Text, TouchableOpacity,StyleSheet, TextInput, ScrollView, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';
import React from 'react';
import Button from '../../components/button';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomeScreen() {


  const [employeedata, setEmployeeData] = useState([]);

  console.log('employee data', employeedata);

  const getemloyeewithaxios= async()=>{
    try {
      const response= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
     // console.log('response', response.data.data, response.status);

      setEmployeeData(response.data.data);



   //   if(response.status===200){
      //  Alert.alert('Success !! ," you are connected"');
     // }
     // else{
        //Alert.alert('error');
    //  }
    }
    catch(error){
     Alert.alert('error');
    }
  }

const getemployeeinfo= async()=>{

  try {
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await response.json();
    console.log('data', data);
    
  }
  catch(e){
    console.log('error', e);

  }
}

useEffect(() => {
  getemloyeewithaxios();
 
},[]); 


console.log('im a boy')

  const [checked, setChecked] = React.useState(false);
  const[FullName, setFullName] = useState('');
  const[PhoneNumber, setPhoneNumber] = useState('');
  const[Password, setPassword] = useState('');
  const[ConfirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  console.log('UserInformation', FullName, PhoneNumber, Password, ConfirmPassword);
 




  return (
    <SafeAreaView style={{marginHorizontal:20, flex:1}}>  

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image resizeMode='contain' source ={require('../../assets/images/logo.png')}style={{ width: 104, height: 39, alignSelf:'center', 
          marginVertical: 15 }} />  
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center'}}>
            Get Started
       </Text>
        <Text style={{fontSize: 16, textAlign:'center', marginVertical: 5 }}>
        "Find your perfect home in minutes with 
        seamless process at Homery"
        </Text>
      


        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:18,height:18, marginRight:5 }} source={require('../../assets/images/google.png')}/>
          <Text style={{ fontSize:18, fontWeight:'bold',marginLeft:5}}>
          Continue with Google
          </Text>
         
          </View>
        </TouchableOpacity> 


        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:24,height:24, marginRight:5 }} source={require('../../assets/images/apple.png')}/>
          <Text style={{ fontSize:18, fontWeight:'bold',marginLeft:5}}>
          Continue with Apple
          </Text>
         
          </View>
        </TouchableOpacity> 
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View style={styles.line}/>
           <Text style={{fontSize: 20, textAlign:'center', marginVertical: 5 }}>
            OR
          </Text>
          <View style={styles.line}/>

        </View>
     

    <View>
      <Text  style={styles.texts}> Full Name</Text>
      <TextInput style={styles.input} onChangeText={(name)=>{
        setFullName(name);
      }}/>

        
    </View>
    <View>
      <Text  style={styles.texts}> Phone Number</Text>
      <TextInput style={styles.input} onChangeText={(number)=>{
        setPhoneNumber(number);
      }}/>
    </View>
    <View>
      <Text style={styles.texts}> Password</Text>
      <TextInput style={styles.input} onChangeText={(password)=>{
        setPassword(password);
      }}/>
    </View>
    <View>
      <Text  style={styles.texts}> Confirm Password</Text>
      <TextInput style={styles.input} onChangeText={(confirmpass)=>{
        setConfirmPassword(confirmpass);
      }}/>
    </View>

    <View style={{flexDirection:'row', marginBottom:10, }}>
    <TouchableOpacity >
    <Checkbox
    uncheckedColor="#E8DEFE"
      
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </TouchableOpacity>
    <Text>
    By continuing,you acknowledge that
     you have read and understood,and agree to Pet Haven <Text style={{fontWeight:'bold'}}>Terms of Service </Text> and <Text style={{fontWeight:'bold'}}>Privacy Policy</Text> .
    </Text>
                          

    </View>
    <Button text={'Continue'}/>

    
    </ScrollView> 
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 4,
  },
  line: {
    height: 1,
    backgroundColor: '#D9D9D9',
    width: '45%',
    marginHorizontal: 5,
    
  },
  input: {
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor: '#E8DEFE',
    marginBottom: 9,
    paddingLeft: 10,
    borderRadius: 8,
  },
  texts: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#11042F',

  },
 
});
