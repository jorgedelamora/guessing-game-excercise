import {useState} from 'react'
import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'

import Button from '../components/Button'
import COLORS from '../constants/colors'
import Title from '../components/Title'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'

const StartGame = ({onSubmitNumber, onReset}) => {

    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, height} = useWindowDimensions();

    const handleOnChangeNumber = (text) => {
        setEnteredNumber(text);
    }



    const submitEnteredNumber = () => {
        const number = parseInt(enteredNumber);
        if(isNaN(number) || number <= 0 || number > 99) {
            Alert.alert('Invalid Number', 'Input has to be a number between 1 and 99', [{text: 'okay', style: 'destructive', onPress: onReset}]);
            return;
        }
        onSubmitNumber(enteredNumber);
    }

    const marginTop = height < 400 ? 16 : 100;

  return (
   <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
            <View style={[styles.container, {marginTop}]}> 
            <Title>Guess my number!</Title>  
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad' 
                    autoCorrect={false} 
                    autoCapitalize='none' 
                    value={enteredNumber}
                    onChangeText={handleOnChangeNumber}
                    />
                <View style={styles.buttonsContainer}>
                    <View style={styles.btn}>
                        <Button onPress={onReset}>Reset</Button>
                    </View>
                    <View style={styles.btn}>
                        <Button onPress={submitEnteredNumber}>Confirm</Button>
                    </View>
                </View>
            </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        height:50,
        width: 50,
        fontSize:32,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.secondary500,
        color:  COLORS.secondary500,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },
    buttonsContainer : {
        flexDirection: 'row'
    },
    btn: {
        flex: 1
    }
})

export default StartGame;
