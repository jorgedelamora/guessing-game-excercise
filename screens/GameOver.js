import React from 'react'
import { View,Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../components/Title'
import COLORS from '../constants/colors'
import Button from '../components/Button'

const GameOver = ({roundsNumber, userNumber, onStartNewGame}) => {

  const {width, height} = useWindowDimensions();
  let imageSize = 300;
  if(width < 380){
    imageSize = 150;
  }
  if(height < 400){
    imageSize = 80;
  }
  
  const imageStyles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.flex1}>
    <View style={styles.container}>
        <Title>
            Game over!
        </Title>
        <View style={[styles.imageContainer, imageStyles]}>
          < Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <Button onPress={onStartNewGame}>Start New Game</Button>
    </View>
    </ScrollView>
  )
}

export default GameOver

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14
  },
  imageContainer: {
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
