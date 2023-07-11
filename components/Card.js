import { View, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        marginTop: 36,
        marginHorizontal:24,
        padding: 16,
        backgroundColor: COLORS.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})