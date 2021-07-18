import React from 'react'
import { Text } from "react-native";
import Center from '../src/components/Center';

export interface DetailedScreenProps {
    
}
 
const DetailedScreen: React.FC<DetailedScreenProps> = () => {
  return (
    <Center>
      <Text>Detailed Screen - componente</Text>
    </Center>
  );
}
 
export default DetailedScreen;
