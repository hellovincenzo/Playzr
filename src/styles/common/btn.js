import { colors } from '../colors';

export const btn = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 5,
};

export const bordered = {
  ...btn,
  width: '90%',
  height: 60,
  backgroundColor: colors.black,
  borderRadius: 5,
};

export const borderBottom = {
  ...btn,
  borderWidth: 1,
  borderBottomColor: 'black',
  borderTopColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
};

export const text = {
  ...btn,
};
