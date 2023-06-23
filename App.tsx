import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import useCachedResource from './hooks/useCachedResources';
import Navigation from './navigation/Index';

export default function App() {

  const fontsAvailable = useCachedResource();

  if(fontsAvailable){
  return (
    <>
     <Navigation />
      <StatusBar style="auto" />
    </>
  );
}else{
  return null
}
}

