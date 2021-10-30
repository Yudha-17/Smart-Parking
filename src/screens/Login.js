import React, {useState} from 'react';
import {
  Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Gap from '../components/Gap';
import Input from '../components/Input';
import Button from '../components/Button';
import {colorFonts, colorInputBlack, colorLabel, colorTheme} from '../styles/Colors';
import {APP_NAME, APP_VERSION} from '../config';
import {ASSet} from '../utils';
import Card from '../components/Card';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [Plat, setPlat] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const AuthLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxGuh5V1vVt2Y_Do0SJOpY9yjFfi_BPys", {
        method:"POST",
        headers: {
          'Content-type' : 'application/JSON'
        },
        body:JSON.stringify({
          "displayName":userName,
          "email":Email,
          "password":password,
          "returnSecureToken":true
        })
      })
      
      const resData = await response.json();
      console.log("Token : ", response.ok);
      console.log("ResData : ", resData);
      const uid = await resData.localId;

      if (response.ok) {
        ASSet('token', resData.idToken);
        const request = await fetch("https://smart-parking-bd987-default-rtdb.firebaseio.com/data1/"+uid+".json")
        const resPayload = await request.json();
        console.log("Data : ", resPayload);
        await ASSet('userName', resPayload.name);
        await ASSet('email', resPayload.email);
        await ASSet('plat', resPayload.plat);
        await ASSet('status', resPayload.status);
        navigation.navigate('HomeScreen');
      }
      else {
        Alert.alert('Email/Password Anda Salah');
      }
      setIsLoading(false);
    }
    catch (error) {
      setIsLoading(false);
      console.log('Error adalah : ', error);
    } 
  };

  const registration = () => {
    navigation.navigate('RegistrationScreen');
  };

  

  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.container}>
        <Gap height={50} />
        <Card>
          <Text style={styles.title}>
            {APP_NAME}
            {' '}
          </Text>
          <View style={styles.form}>
          <Gap height={50} />
          <Input
            label="Email"
            icon="user"
            value={Email}
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          <Gap height={20} />
          <Input
            label="Kata Sandi"
            icon="lock"
            secureTextEntry
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
          <Gap height={40} />
          <Button
            title="MASUK"
            isLoading={isLoading}
            onPress={AuthLogin}
          />
          <Button
            title="DAFTAR"
            onPress={registration}
            style={{backgroundColor:'#0000ff'}}
          />
          <Gap height={15} />
          <View style={styles.option}>
            <TouchableOpacity onPress={() => {
              Alert.alert('Informasi Login',
                  'Untuk informasi lebih lanjut, hubungi kami');
            }}
            >
              <Text style={styles.label}>Butuh bantuan login?</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Card>
        <Gap height={40} />
        <Text style={styles.version}>
        Versi
          {' '}
          {APP_VERSION}
        </Text>
        <Gap height={10} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colorTheme,
  },
  container: {
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    color: colorInputBlack,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    color: colorLabel,
    textAlign: 'center',
  },
  version: {
    fontSize: 18,
    color: colorFonts,
  }
});
