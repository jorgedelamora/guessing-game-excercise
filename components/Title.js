import { Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const Title = ({children, style = {}}) => {
  return (
    <Text style={[styles.title, style]}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:24,
        color: COLORS.white ,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: COLORS.white ,
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 16
    }
})
