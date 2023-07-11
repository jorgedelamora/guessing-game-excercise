import { Text, View, StyleSheet} from "react-native"
import COLORS from "../constants/colors"

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.secondary500,
        padding:24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize:36,
        fontFamily: 'open-sans-bold',
        color: COLORS.secondary500
    }
})