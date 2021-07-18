import React from "react";
import { TouchableOpacity, FlatList, View, StyleSheet, Text } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import { AppNavigator } from "./routes/homeStack";


const App = () => {
  
  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })
  
  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return(
      <AppNavigator />
      )
    }
    
  }
  
  export default App
  
  // const styles = StyleSheet.create({
  //     container: {
  //       flex: 1,
  //       backgroundColor: '#07121f',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     },
  //     innerCont: {
  //       backgroundColor: '#03090f',
  //       borderRadius: 8,
  //       width: 240,
  //       height: 120,
  //       display: 'flex',
  //       alignItems: 'center',
  //       flexDirection: 'column',
  //       justifyContent: 'center'
  //     },
  //     text : {
  //       color: '#0DCA4F',
  //       fontFamily: 'Montserrat_400Regular',
  //     }
  // })
