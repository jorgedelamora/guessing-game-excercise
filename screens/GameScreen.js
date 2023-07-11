import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Alert } from 'react-native'
import Button from '../components/Button'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'
import {Ionicons} from '@expo/vector-icons';

const guessNumber = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if(randomNum === exclude) {
        return guessNumber(min, max, exclude);
    }

    return randomNum;
}

let minBoundary = 1;
let maxBoundary = 100

const GameScreen = ({userNumber, onGameOver}) => {

    const initialGuess = guessNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const handleNextGuess = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber)|| (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert('Dont lie to your phone!', '', [{text: 'sorry', style:'destructive'}]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }
        const newGuess = guessNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newGuess);
    }

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    },[userNumber, currentGuess, onGameOver]);

  return (
    <View style={styles.container}>
        <View style={styles.alignCenter}>
            <Title>Opponents Guess</Title>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.btn}>
                    <Button onPress={() => handleNextGuess('lower')}>
                        <Ionicons name='md-remove' size={24}/>
                    </Button>
                </View>
                <View style={styles.btn}>
                    <Button onPress={() => handleNextGuess('higher')}>
                        <Ionicons name='md-add' size={24}/>
                    </Button>
                </View>
            </View>
        </Card>
        <View>
            <Text>log rounds...</Text>
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    alignCenter: {
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    btn:{
        flex: 1
    }
})