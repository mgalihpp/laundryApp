import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <View style={styles.text}>
          <Text>Saldo : </Text>
          <Text>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text>Antar Point</Text>
          <Text style={{color: 'blue'}}>100 points</Text>
        </View>
      </View>
      <View style={styles.btn}></View>
    </View>
  );
};

export default Saldo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  saldo: {
    width: '60%',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {},
});
