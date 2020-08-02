import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const RotateView = ({ children }) => {
  const rotate = useRef(new Animated.Value(0)).current;

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateStyles = {
    transform: [
      {
        rotate: rotateInterpolation,
      },
    ],
  };
  const handleRotate = () =>
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 700,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();

  useEffect(() => handleRotate());
  return <Animated.View style={rotateStyles}>{children}</Animated.View>;
};

export { RotateView };
