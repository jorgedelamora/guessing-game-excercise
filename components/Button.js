import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const Button = ({children, onPress, style = {}}) => {

  const handleOnPress = () => {
    if(!onPress) {
        throw new Error('Forgot the onPress prop?');
    }
    onPress();
  }

  return (
    <View style={styles.outerContainer}>
        <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.innerContainer, style] : [styles.innerContainer, style]} onPress={handleOnPress} android_ripple={{color: COLORS.primary600}}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer: {
        margin:4,
        borderRadius:28,
        overflow: 'hidden'
    },
    innerContainer: {
        backgroundColor: COLORS.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    text:{
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})

export default Button
