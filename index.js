import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import renderer from 'react-test-renderer';
export { BottomPopup } from './src/Components/BottomPopup/BottomPopup';
export { ButtonComponent } from './src/Components/ButtonComponent/ButtonComponent';
export const testButtonAccessibility=()=>{
    const component = renderer.create(
<ButtonComponent
      width={200}
      height={50}
      bgColor={'orange'}
      title={'my button'}
      titleColor={'black'}
      titleSize={20}
      borderRadius={10}
      accessibilityLabel="My button"
      accessible={true}
    />
  );
  const buttonInstance = component.root.findByType(TouchableOpacity); // Change ButtonComponent to TouchableOpacity
 
  expect(buttonInstance.props.accessibilityLabel).toBe('My button');
  expect(buttonInstance.props.accessible).toBe(true);
}
export function testClickFunction() {
  let clicked = false;
  const handleClick = () => {
    clicked = true;
  };
 
  const component = renderer.create(
<ButtonComponent
      width={200}
      height={50}
      bgColor={'orange'}
      title={'my button'}
      titleColor={'black'}
      titleSize={20}
      borderRadius={10}
      onPress={handleClick}
    />
  );
 
  const buttonInstance = component.root.findByType(TouchableOpacity); // Change ButtonComponent to TouchableOpacity
  fireEvent.press(buttonInstance);
 
  expect(clicked).toBe(true);
}
 
export function testButtonStyles() {
  const component = renderer.create(
<ButtonComponent
      width={200}
      height={50}
      bgColor={'orange'}
      title={'my button'}
      titleColor={'black'}
      titleSize={20}
      borderRadius={10}
    />
  );
  const buttonInstance = component.root.findByType(TouchableOpacity); // Change ButtonComponent to TouchableOpacity
 
  expect(buttonInstance.props.style.width).toBe(200);
  expect(buttonInstance.props.style.height).toBe(50);
  expect(buttonInstance.props.style.backgroundColor).toBe('orange');
  expect(buttonInstance.findByType(Text).props.style.color).toBe('black');
  expect(buttonInstance.findByType(Text).props.style.fontSize).toBe(20);
  expect(buttonInstance.props.style.borderRadius).toBe(10);
}
 
 
export const ButtonComponent = ({
  width,
  height,
  bgColor,
  title,
  titleColor,
  titleSize,
  borderRadius,
  accessibilityLabel,
  accessible,
  onPress,
}) => {
  return (
<TouchableOpacity
      style={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      accessibilityLabel={accessibilityLabel}
      accessible={accessible}
      onPress={onPress}
>
<Text style={{ color: titleColor, fontSize: titleSize }}>{title}</Text>
</TouchableOpacity>
  );
};