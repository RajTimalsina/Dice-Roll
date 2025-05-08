import {Image, StyleSheet, Text, View, Vibration, Alert} from 'react-native';
import React, {useState} from 'react';

import diceOne from '../assets/One.png';
import diceTwo from '../assets/Two.png';
import diceThree from '../assets/Three.png';
import diceFour from '../assets/Four.png';
import diceFive from '../assets/Five.png';
import diceSix from '../assets/Six.png';

export default function App() {
  const [displayDice, setDisplayDice] = useState(diceOne);
  const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  function diceRoll() {
    Vibration.vibrate(50);
    // Alert.alert('Vibration triggered!');
    const random = Math.floor(Math.random() * 6);
    setDisplayDice(dice[random]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Image style={styles.diceImage} source={displayDice} />
        <Text style={styles.rollDiceBtnText} onPress={diceRoll}>
          ROll The Dice
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
  },
  diceContainer: {
    margin: 20,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#4EA7E9',
    fontWeight: '900',
    textTransform: 'uppercase',
    marginTop: 12,
    backgroundColor: '#e4e4e4',
    elevation: 2,
  },
});
