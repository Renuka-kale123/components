import React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import {ButtonComponent} from 'pkg';
const { width, height } = Dimensions.get('screen');
 
const App = () => {
  const handleClick=()=>{
    console.warn("Button Clicked")
  }
  return (
<View style={styles.container}>
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