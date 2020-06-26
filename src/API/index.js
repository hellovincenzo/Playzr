import { route } from './constant';
import { storeData, retrieveData, callAPI } from '~/helpers';
import { SIGN_IN } from '~/redux/types/userTypes';

export const auth = async (email, password, dispatch) => {
  try {
    const result = await callAPI('post', route.login, { email, password });

    if (result) {
      const { token } = result.data;
      await storeData('userToken', token);
      dispatch({ type: SIGN_IN, token });
      console.log(token);
    }
  } catch (error) {
    console.log(error);
  }
};
