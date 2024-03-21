import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Logo, SplashBackground} from '../../assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types';

type Props = NativeStackScreenProps<RootStackParamList>;

const Splash = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    });
  });

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});
