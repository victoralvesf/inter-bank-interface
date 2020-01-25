import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../../theme/colors';

import Card from '../../style/Card';

export default function Login(props) {
  console.log(props.user);
  return (
    <Card>
      <View style={styles.loginBox}>
        <View style={styles.firstLetter}>
          <Text style={styles.firstLettersText}>{ getFirstLetters(props.name) }</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoName}>{props.name}</Text>
          <Text style={{color: Colors.darkGray, marginTop: 4}}>{ props.account }</Text>
        </View>
        <TouchableOpacity style={styles.changeUserButton}>
          <Text style={{color: Colors.dark, fontWeight: '500'}}>ALTERAR</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity style={styles.loginButton}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            style={styles.linearGradient}>
            <Text
              style={{color: Colors.white, fontWeight: '600', fontSize: 16}}>
              ENTRAR
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

function getFirstLetters(value) {
  return value.split(' ').map(letter => letter.slice(0,1)).join('').slice(0,2);
}

const styles = StyleSheet.create({
  loginBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  firstLetter: {
    width: 40,
    height: 40,
    backgroundColor: Colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  firstLettersText: {
    color: Colors.white,
    fontSize: 18
  },

  changeUserButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingVertical: 7,
    paddingHorizontal: 14,
    height: 33,
    alignItems: 'center'
  },

  userInfo: {
    maxWidth: '40%',
    marginLeft: -55,
  },

  userInfoName: {
    color: Colors.dark,
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 18
  },

  loginButton: {
    width: 230,
    height: 45,
    borderRadius: 5,
    marginTop: 15
  },
  
  linearGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});