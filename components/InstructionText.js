import { Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const InstructionText = ({children, style = {}}) => {
  return (
    <Text style={[styles.container, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    container:{
        fontFamily: 'open-sans',
        color: COLORS.secondary500,
        fontSize: 24
    }
})