import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import COLORS from './constants/colors';

export default function App() {

  const [number, setNumber] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  const handleOnSubmitNumber = (num) => {
    setNumber(parseInt(num))
  }

  const handleOnReset = () => {
    setNumber(null);
    if(isGameOver){
      setIsGameOver(false);
      setRounds([]);
    }
  }

  const addNewGuessRound = (newGuessRound) => {
    setRounds((currentRounds) => [...currentRounds, newGuessRound]);
  }

  let screen = <StartGame onSubmitNumber={handleOnSubmitNumber} onReset={handleOnReset}/>

  if(number && !isGameOver) {
    screen = <GameScreen userNumber={number} onGameOver={() => setIsGameOver(true)} onNewGuessRound={addNewGuessRound} guessRounds={rounds}/>
  }else if(number && isGameOver){
    screen = <GameOver onStartNewGame={handleOnReset} roundsNumber={rounds.length} userNumber={number}/>
  }

  // screen = <GameOver onStartNewGame={handleOnReset} roundsNumber={rounds.length} userNumber={number}/>

  return (
    <>
    <StatusBar style='light' />
    <LinearGradient style={styles.rootScreen} colors={[COLORS.primary800,COLORS.secondary500]}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
