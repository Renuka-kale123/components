// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// index.js (pkg module)

import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from '../Task/ButtonComponent';
import { fireEvent } from '@testing-library/react-native';

export const ButtonComponent = (props) => {
  // Define the implementation of ButtonComponent here
  return null; // Replace with actual implementation
};

export function testRenderSnapshot() {
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

  const buttonInstance = component.root.findByType(ButtonComponent);
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
  const buttonInstance = component.root.findByType(ButtonComponent);

  expect(buttonInstance.props.width).toBe(200);
  expect(buttonInstance.props.height).toBe(50);
  expect(buttonInstance.props.bgColor).toBe('orange');
  expect(buttonInstance.props.titleColor).toBe('black');
  expect(buttonInstance.props.titleSize).toBe(20);
  expect(buttonInstance.props.borderRadius).toBe(10);
}

export function testButtonAccessibility() {
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
  const buttonInstance = component.root.findByType(ButtonComponent);

  expect(buttonInstance.props.accessibilityLabel).toBe('My button');
  expect(buttonInstance.props.accessible).toBe(true);
}

