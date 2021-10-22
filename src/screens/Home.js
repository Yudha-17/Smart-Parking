import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Card from '../components/Card';
import Gap from '../components/Gap';
import {colorFonts, colorTheme} from '../styles/Colors';

const Home = ({navigation}) => {
  const logout = () => {
    Alert.alert('Logout', 'Apakah anda yakin untuk keluar ?', [
      {
        text: 'Ya',
        // onPress: async () => {
        //   AsyncStorage.removeItem('token')
        //     .then(() => {
        //       navigation.replace('Login');
        //     });
        // },
      },
      {
        text: 'Tidak', style: 'cancel',
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Gap height={10} />
        <View style={styles.header}>
          <View style={styles.about}>
            <Text style={styles.contentHeader}>Hai, Nama</Text>
            <Text style={styles.contentHeader}>Plat Kendaraan</Text>
          </View>
          <Text>{' '}</Text>
          <TouchableOpacity onPress={logout}>
            <FAIcon name='sign-out' color={colorFonts} size={23}/>
          </TouchableOpacity>
        </View>
        <Gap height={50} />
        <Card>
          <Gap height={15} />
          <View style={styles.data}>
            <View style={styles.indexData}>
              <Text style={styles.contentData}>Nama</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>NIK</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>Plat Kendaraan</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>Email</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>Status Kendaraan{'    '}</Text>
            </View>
            <View style={styles.indexData}>
              <Text style={styles.contentData}>:</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>:</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>:</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>:</Text>
              <Gap height={10} />
              <Text style={styles.contentData}>:</Text>
            </View>
          </View>
          <Gap height={15} />
        </Card>
        <Gap height={55} />
        <View style={styles.slotParking}>
          <Text style={styles.titleSlot}>Slot Tersedia</Text>
          <Gap height={30} />
          <Text style={styles.indexParking}>0</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  about: {
    flexDirection: 'column',
  },
  container: {
    backgroundColor: colorTheme,
  },
  content: {
    width: '95%',
    marginLeft: 10,
  },
  contentData: {
    fontSize: 15,
  },
  contentHeader: {
    color: colorFonts,
    fontSize: 20,
  },
  data: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indexData: {
    flexDirection: 'column',
  },
  indexParking: {
    fontSize: 70,
    color: colorFonts,
  },
  slotParking: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSlot: {
    fontSize: 30,
    color: colorFonts,
  },
});
