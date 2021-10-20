import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import {colorLabel, colorTheme} from '../styles/Colors';

const Registration = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Gap height={16}/>
        <Text style={styles.title}>DAFTAR AKUN</Text>
        <Gap height={45}/>
        <Input
          label="Username"
          value={userName}
          onChangeText={(value) => {
            setUserName(value);
          }}
        />
        <Gap height={20}/>
        <Input
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(value) => {
            setUserName(value);
          }}
        />
        <Gap height={30} />
        <Button
          title="Simpan"
          onPress={() => {
            navigation.replace('LoginScreen');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Bungee-Regular',
    color: colorLabel,
  },
});
