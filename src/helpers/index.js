import { AsyncStorage, Alert } from 'react-native';
import i18n from 'i18next';

import { LNG } from '~/redux/types/settingsTypes';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const retrieveData = async (key) => {
  let value = null;
  try {
    value = await AsyncStorage.getItem(key);
  } catch (error) {
    // Error retrieving data
    value = error;
  }
  return value;
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

export const alertMsg = (title, msg) =>
  Alert.alert(
    title,
    msg,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  );

export const changeLanguage = (lang, dispatch) => {
  dispatch({ type: LNG, lng: lang });
  return i18n.changeLanguage(lang);
};
