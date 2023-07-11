import React from 'react'
import { View,Text, StyleSheet, Image } from 'react-native'
import Title from '../components/Title'
import COLORS from '../constants/colors'

const GameOver = () => {
  return (
    <View style={styles.container}>
        <Title>
            Game over!
        </Title>
        <View style={styles.imageContainer}>
          < Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>
    </View>
  )
}

export default GameOver

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  }
})