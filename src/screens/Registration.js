import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import {colorDanger, colorLabel} from '../styles/Colors';
import { showError, showInfo, showSuccess } from '../utils';

const Registration = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [Plat, setPlat] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const AuthSign = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxGuh5V1vVt2Y_Do0SJOpY9yjFfi_BPys",
      {
        method: "POST",
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

      // Store Data
      const dataForAPI = {
        name: userName,
        plat: Plat,
        email: Email,
        status: "Tidak Terparkir",
      }

      if (response.ok){
        await fetch("https://smart-parking-bd987-default-rtdb.firebaseio.com/data1/"+uid+".json", {
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dataForAPI),
        })
        showSuccess("Data berhasil disimpan");
        setIsLoading(false);
        navigation.replace("LoginScreen");
      }
      else {
        showError(resData.error.message);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('Error adalah : ', error.message);
    }
  };

  const reset = () => {
    setUserName('');
    setNIK('');
    setPlat('');
    setEmail('');
    setPassword('');
    showInfo('Perubahan telah dihapus');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Gap height={20}/>
        <Input
          label="Nama"
          value={userName}
          onChangeText={(value) => {
            setUserName(value);
          }}
        />
        <Gap height={20}/>
        <Input
          label="No. Plat"
          value={Plat}
          onChangeText={(value) => {
            setPlat(value);
          }}
        />
        <Gap height={20}/>
        <Input
          label="Email"
          value={Email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <Gap height={20}/>
        <Input
          label="Kata Sandi"
          value={password}
          secureTextEntry
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
        <Gap height={30} />
        <Button
          title="Simpan"
          isLoading={isLoading}
          onPress={AuthSign}
        />
        <Button
          title="Hapus"
          style={{backgroundColor:colorDanger}}
          onPress={reset}
        />
      </View>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  identity: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    color: colorLabel,
  },
});
