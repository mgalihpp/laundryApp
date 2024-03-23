import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Header, Logo} from '~/assets';
import {Saldo} from '~/components';

const Home = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hero}>
          <Text style={styles.text}>
            Selamat Datang, <Text style={{fontWeight: '900'}}>afifbasya</Text>
          </Text>

          <ImageBackground
            source={Header}
            style={styles.header}></ImageBackground>
        </View>
      </View>
      <Saldo />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E0F7EF',
    paddingHorizontal: 30,
    paddingTop: 10,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  logo: {
    width: 125,
    height: 55,
  },
  hero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    maxWidth: windowWidth / 2,
    fontWeight: '400',
  },
  header: {
    width: windowWidth / 2,
    height: windowHeight * 0.25,
  },
});
