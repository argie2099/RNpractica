import React from 'react'
import Center from '../src/components/Center';
import Montserrat from '../src/components/Montserrat';

export interface HomeScreenProps {
    
}
 
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Center>
      <Montserrat>Home Screen</Montserrat>
    </Center>
  );
}
 
export default HomeScreen;
