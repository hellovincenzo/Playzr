import axios from 'axios';

import { route } from './constant';
import { storeData, retrieveData, callAPI } from '~/helpers';
import { SIGN_IN } from '~/redux/types/userTypes';

// export const auth = async (email, password, dispatch) => {
//   try {
//     const result = await callAPI('post', route.login, { email, password });

//     if (result) {
//       const { token, user_id } = result.data;

//       if (token && user_id) {
//         storeData('token', token);
//         storeData('id', user_id);
//         dispatch({ type: SIGN_IN, token, id: user_id });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const auth = (email, password, dispatch) =>
  axios
    .post(route.login, { email, password })
    .then((result) => {
      if (result) {
        const { token, user_id } = result.data;

        if (token && user_id) {
          storeData('token', token);
          storeData('id', user_id);
          dispatch({ type: SIGN_IN, token, id: user_id });
        }
      }
    })
    .catch((error) => console.log(error));
