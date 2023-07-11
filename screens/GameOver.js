import React from 'react'
import { View,Text, StyleSheet, Image } from 'react-native'
import Title from '../components/Title'
import COLORS from '../constants/colors'
import Button from '../components/Button'

const GameOver = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.container}>
        <Title>
            Game over!
        </Title>
        <View style={styles.imageContainer}>
          < Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <Button onPress={onStartNewGame}>Start New Game</Button>
    </View>
  )
}

export default GameOver

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14
  },
  imageContainer: {
    width:300,
    height:300,
    borderRadius:200,
    borderWidth: 3,
    overflow: 'hidden',
    borderColor: COLORS.primary800,
    margin:36
  },
  image:{
    height:'100%',
    width: '100%'
  },
  summaryText: {
    fontSize: 24,
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primary500
  }
})