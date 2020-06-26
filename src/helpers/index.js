import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const callAPI = async (method, route, data) =>
  axios[method](route, data)
    .then((response) => response)
    .catch((error) => error);
