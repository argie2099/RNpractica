import React from 'react'
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export interface CenterProps {
  
}
 
const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <View style={styles.centerView}>
      {children}
    </View>
  );
}
 
export default Center;
