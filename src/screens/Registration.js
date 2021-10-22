import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import {colorDanger, colorLabel, colorTheme} from '../styles/Colors';
import { showInfo } from '../utils';

const Registration = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [NIK, setNIK] = useState('');
  const [Plat, setPlat] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          label="NIK"
          value={NIK}
          onChangeText={(value) => {
            setNIK(value);
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
          onPress={() => {
            navigation.replace('LoginScreen');
          }}
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
