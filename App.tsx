import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import {testButtonAccessibility,testClickFunction,ButtonComponent,testButtonStyles} from 'componentspkg'
const { width, height } = Dimensions.get('screen');
 
const App = () => {
  const handleClick=()=>{
    console.warn("Button Clicked")
  }
  useEffect(()=>{
    testButtonAccessibility()
    testClickFunction()
    testButtonStyles()
    
  },[])
  return (
    <View style={styles.container}>
<Text>Hellooooo</Text>

<ButtonComponent width={200} height={50} bgColor={'orange'} title={'my button'} titleColor={'black'} titleSize={20} borderRadius={10} onPress={handleClick}/> 
</View> 
  );
};
 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   width:width,
   height:height,
   justifyContent:'center',
   alignItems:'center'
  }
});
 
export default App