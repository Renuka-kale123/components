import React from 'react';

export const viewShotRef: any = React.createRef();

export const getScreenShot = async (viewRef = null) => {
  const ref: any = viewRef === null ? viewShotRef?.current : viewRef;
  try {
    if (ref) {
      const result: any = await ref.capture();
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};
