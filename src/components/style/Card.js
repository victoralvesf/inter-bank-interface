import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../../theme/colors';

export default function Card(props) {
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.ice,
    borderRadius: 6,
    marginHorizontal: 20,
    top: -20,
    marginBottom: 20,
    padding: 20,
    elevation: 5,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
})
