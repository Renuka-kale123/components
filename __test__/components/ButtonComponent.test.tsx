import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import renderer from 'react-test-renderer';
import { ButtonComponent } from '../../src/Components/ButtonComponent/ButtonComponent';
import { fireEvent } from '@testing-library/react-native';

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
            accessible={true} onPress={undefined}    />
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
          onPress={handleClick} accessibilityLabel={undefined} accessible={undefined}    />
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
          borderRadius={10} accessibilityLabel={undefined} accessible={undefined} onPress={undefined}    />
  );
  const buttonInstance = component.root.findByType(TouchableOpacity); // Change ButtonComponent to TouchableOpacity
 
  expect(buttonInstance.props.style.width).toBe(200);
  expect(buttonInstance.props.style.height).toBe(50);
  expect(buttonInstance.props.style.backgroundColor).toBe('orange');
  expect(buttonInstance.findByType(Text).props.style.color).toBe('black');
  expect(buttonInstance.findByType(Text).props.style.fontSize).toBe(20);
  expect(buttonInstance.props.style.borderRadius).toBe(10);
}
 