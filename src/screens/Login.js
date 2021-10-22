import React, {useState} from 'react';
import {
  Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import axios from 'axios';
import Gap from '../components/Gap';
import Input from '../components/Input';
import Button from '../components/Button';
import {colorFonts, colorInputBlack, colorLabel, colorTheme} from '../styles/Colors';
import {API_BASE_URL, APP_NAME, APP_VERSION} from '../config';
import {ASSet, showError, showInfo, showSuccess} from '../utils';
import Card from '../components/Card';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    navigation.replace('HomeScreen');
    // setIsLoading(true);

    // const form = {
    //   email: userName,
    //   password,
    // };

    // await axios.post(`${API_BASE_URL}users?per_page=20`)
    //     .then((response) => {
    //       if (response && response.status === 200) {
    //         if (response.data.token) {
    //           ASSet('token', response.data.token);
    //           navigation.replace('HomeScreen');
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       console.log('Error : ', error);
    //       Alert.alert('Login gagal', 'Username / Password Salah.!');
    //       showError('Password Salah');
    //     })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });
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
            value={userName}
            onChangeText={(value) => {
              setUserName(value);
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
            onPress={login}
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
