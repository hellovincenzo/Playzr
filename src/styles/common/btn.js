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
  backgroundColor: colors.black,
  borderRadius: 5,
  height: 60,
};

export const borderedLoading = {
  ...bordered,
  backgroundColor: colors.black02,
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
