/**
 * @format
 */



import 'react-native';
import React from 'react';
import ButtonComponent from '../Task/ButtonComponent';
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react-native'; // Import fireEvent from @testing-library/react-native
 
// Test render Snapshot
test('Test render SnapShot', () => {
  const snapShot = renderer.create(
<ButtonComponent
      width={200}
      height={50}
      bgColor={'orange'}
      title={'my button'}
      titleColor={'black'}
      titleSize={20}
      borderRadius={10}
    />
  ).toJSON();
  expect(snapShot).toMatchSnapshot();
});
 
// Test click function
test('Test click function', () => {
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
 
  const buttonInstance = component.root.findByType(ButtonComponent);
  fireEvent.press(buttonInstance); // Simulate a click event on the button
 
  expect(clicked).toBe(true); // Assert that the click function was called
});
 
// Test button styles
test('Test button styles', () => {
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
  const buttonInstance = component.root.findByType(ButtonComponent);
 

  expect(buttonInstance.props.width).toBe(200);
  expect(buttonInstance.props.height).toBe(50);
  expect(buttonInstance.props.bgColor).toBe('orange');
  expect(buttonInstance.props.titleColor).toBe('black');
  expect(buttonInstance.props.titleSize).toBe(20);
  expect(buttonInstance.props.borderRadius).toBe(10);
});
 
// Test button accessibility
test('Test button accessibility', () => {
  const component = renderer.create(
<ButtonComponent
      width={200}
      height={50}
      bgColor={'orange'}
      title={'my button'}
      titleColor={'black'}
      titleSize={20}
      borderRadius={10}
      accessibilityLabel="My button" // Adding accessibility label
      accessible={true} // Making button accessible
    />
  );
  const buttonInstance = component.root.findByType(ButtonComponent);
 
  // Check button accessibility attributes
  expect(buttonInstance.props.accessibilityLabel).toBe('My button');
  expect(buttonInstance.props.accessible).toBe(true);
});
 
