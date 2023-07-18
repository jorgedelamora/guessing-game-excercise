import {useState, useEffect} from 'react'
import {View, ScrollView, StyleSheet, Alert, useWindowDimensions } from 'react-native'
import Button from '../components/Button'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'
import GuessLogItem from '../components/GuessLogItem'
import {Ionicons} from '@expo/vector-icons';

const guessNumber = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if(randomNum === exclude) {
        return guessNumber(min, max, exclude);
    }

    return randomNum;
}

let minBoundary = 1;
let maxBoundary = 100;

const resetBoundries = () => {
    minBoundary = 1;
    maxBoundary = 100;
}

const GameScreen = ({userNumber, onGameOver, onNewGuessRound, guessRounds}) => {

    const initialGuess = guessNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const {width, height} = useWindowDimensions();

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
        onNewGuessRound(newGuess);
    }

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    },[userNumber, currentGuess, onGameOver]);

    useEffect(() => {
        resetBoundries();
        if(currentGuess){
            onNewGuessRound(currentGuess);
        }
    },[])

    let content = (
        <>
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
        <ScrollView style={styles.guessRoundsContainer} alwaysBounceHorizontal alwaysBounceVertical>
            {guessRounds.map((round, idx) => (
                <GuessLogItem key={`round-${idx}-${round}`} RoundNumber={guessRounds.length - (idx)} guess={round} />
            ))
            }
        </ScrollView>
        </>
    )

    if(width > 500) {
        content = (
            <>
                <InstructionText>Higher or Lower?</InstructionText>
                <ScrollView style={styles.horizontalContainer}>
                <View style={styles.buttonsContainerHorizontal}>
                    <View style={styles.btnHorizontal}>
                        <Button onPress={() => handleNextGuess('lower')}>
                            <Ionicons name='md-remove' size={24}/>
                        </Button>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.btnHorizontal}>
                        <Button onPress={() => handleNextGuess('higher')}>
                            <Ionicons name='md-add' size={24}/>
                        </Button>
                    </View>
                </View>
                <View style={styles.guessRoundsContainerHorizontal} alwaysBounceHorizontal alwaysBounceVertical>
                    {guessRounds.map((round, idx) => (
                        <GuessLogItem key={`round-${idx}-${round}`} RoundNumber={guessRounds.length - (idx)} guess={round} />
                    ))
                    }
                </View> 
                </ScrollView>
            </>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.alignCenter}>
            <Title style={styles.title}>Opponents Guess</Title>
        </View>
        {content}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    title:{
        maxWidth: '80%',
        width: 300
    },
    alignCenter: {
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonsContainerHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        flex: 1
    },
    btnHorizontal: {
        flex: 1,
        maxWidth:120
    },  
    guessRoundsContainer: {
        marginTop: 24,
        marginHorizontal: 16,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#ffffff1a',
        overflow: 'hidden'
    },
    guessRoundsContainerHorizontal: {
        flex: 1,
        marginTop: 14,
        maxWidth: '80%',
        marginHorizontal: '10%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#ffffff1a',
        overflow: 'hidden'
    },
    horizontalContainer: {
        flex: 1,
        marginTop: 24
    }
})