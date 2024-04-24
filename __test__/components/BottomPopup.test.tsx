import React from 'react';
import '@testing-library/jest-native/extend-expect'; // Import jest-native for extended expect functions
import { render, fireEvent } from '@testing-library/react-native'; // Import render and fireEvent from testing-library

// Your test cases here
import { BottomPopup } from "../../src/Components/BottomPopup/BottomPopup";
import { images } from "../../Theme/Images";

describe('BottomPopup', () => {
  const callbackModalMock = jest.fn();
  const buttonPressMock = jest.fn();

  afterEach(() => {
    callbackModalMock.mockClear();
    buttonPressMock.mockClear();
  });

  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    imageName: images.Downloadsuccess,
    buttonTitle: 'Test Button',
    callbackModal: callbackModalMock,
    buttonPress: buttonPressMock
  };

  it('renders with correct content', () => {
    const { getByText, getByTestId } = render(
      <BottomPopup {...defaultProps} />
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
    expect(getByTestId('popupImage')).toBeTruthy();
  });

  it('calls callbackModal function when close icon is pressed', () => {
    const { getByTestId } = render(<BottomPopup {...defaultProps} />);
    fireEvent.press(getByTestId('closeIcon'));
    expect(callbackModalMock).toHaveBeenCalledTimes(1);
  });

  it('renders bottom button with correct title and style', () => {
    const { getByText } = render(<BottomPopup {...defaultProps} />);
    const button = getByText('Test Button');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(buttonPressMock).toHaveBeenCalledTimes(1);
  });
});