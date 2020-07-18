import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// STYLES
import { Colors } from '~/styles';

const Heading = ({
  style,
  level,
  text,
  fontType,
  color,
  ComponentIcon,
  iconName,
  iconColor,
  iconSize,
  iconStyle,
  iconPosition,
}) => {
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

  const headingStyles = [
    {
      fontSize: fontSize(),
      fontFamily: `${font}-${fontFamily()}`,
      color,
    },
    style,
  ];

  const headingIconStyles = iconStyle;

  const renderHeading = () => {
    switch (iconPosition) {
      case 'bottom':
        return (
          <>
            <Text style={headingStyles}>{text}</Text>
            {iconName && (
              <ComponentIcon
                style={headingIconStyles}
                name={iconName}
                size={iconSize}
                color={iconColor ? iconColor : color}
              />
            )}
          </>
        );

      default:
        return (
          <>
            <Text style={headingStyles}>
              {iconName && (
                <ComponentIcon
                  style={headingIconStyles}
                  name={iconName}
                  size={iconSize}
                  color={color || iconColor}
                />
              )}
              {text}
            </Text>
          </>
        );
    }
  };

  return renderHeading();
};

Heading.defaultProps = {
  level: 6,
  fontType: 'regular',
  color: Colors.colors.black,
  iconSize: 24,
};

Heading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string.isRequired,
  fontType: PropTypes.string,
  color: PropTypes.string,
};

export { Heading };
