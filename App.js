import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from 'react-native';

import Colors from './src/theme/colors';
import Logo from './src/assets/logo.png';

import LoginCard from './src/components/layout/Login/LoginCard';

function App() {
  const [user, setUser] = useState({name: '', account: ''});

  useEffect(() => {
    const name = 'Victor Alves Fialho';
    const account = '1234567-8';
    
    setUser({ name: name.toUpperCase(), account });
  }, [])

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.primary }} />
      <StatusBar barStyle="light-content"  />
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <LoginCard {...user}/>
    </>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    backgroundColor: Colors.primary,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 130,
    height: 48
  },
});

export default App;
