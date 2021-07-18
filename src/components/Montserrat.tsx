import React from 'react'
import { Text } from 'react-native';
export interface MontserratProps {
  
}
 
const Montserrat: React.FC<MontserratProps> = ({children}) => {
  return (
    <Text style={{
      fontFamily: 'Montserrat_400Regular'
    }}>{children}</Text>
  );
}
 
export default Montserrat;
