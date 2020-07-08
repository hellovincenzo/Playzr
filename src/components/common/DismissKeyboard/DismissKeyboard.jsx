import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    style={{ position: 'relative' }}
  >
    {children}
  </TouchableWithoutFeedback>
);

export { DismissKeyboard };
