import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const GuessLogItem = ({RoundNumber, guess}) => {
  return (
    <View style={styles.container}>
      <Text>Round {RoundNumber}</Text>
      <Text>Opponents guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    container: {
        borderColor: COLORS.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding:12,
        marginVertical: 8,
        marginHorizontal: '2%',
        backgroundColor: COLORS.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '96%',
        elevation: 4,
        shadowColor: COLORS.black,
        shadowOffset: {width:0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,

    }
});