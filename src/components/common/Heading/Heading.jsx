import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// STYLES
import { Colors } from '~/styles';

const Heading = ({ level, text, fontType, color, ComponentIcon, iconName }) => {
  const font = 'spartan';

  const fontSize = () => {
    switch (level) {
      case 1:
        return 48;
      case 2:
        return 36;
      case 3:
        return 32;
      case 4:
        return 28;
      case 5:
        return 22;
      case 6:
        return 18;

      default:
        return 16;
    }
  };

  const fontFamily = () => {
    switch (fontType) {
      case 'regular':
        return 'regular';
      case 'medium':
        return 'medium';
      case 'bold':
        return 'bold';
      default:
        return 'regular';
    }
  };

  return (
    <>
      <Text
        style={{
          fontSize: fontSize(),
          fontFamily: `${font}-${fontFamily()}`,
          color,
        }}
      >
        {iconName && <ComponentIcon name={iconName} size={24} color={color} />}
        {text}
      </Text>
    </>
  );
};

Heading.defaultProps = {
  level: 6,
  fontType: 'regular',
  color: Colors.colors.black,
};

Heading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string.isRequired,
  fontType: PropTypes.string,
  color: PropTypes.string,
};

export { Heading };
