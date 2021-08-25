import { GET_ALL_DATA_SUCCESS, GET_ALL_DATA_ERROR, GET_ALL_DATA_REQUESTING } from './types'
import { REQUESTING } from '../utils/constant';
import { getData } from '../utils/Api'

export const getApiRequest = () => {
  return {
    type: GET_ALL_DATA_REQUESTING,
    status: REQUESTING
  };
}

export function getApiDataSuccess(payload) {
  return {
    type: GET_ALL_DATA_SUCCESS,
    payload
  };
}

export function getApiError(payload) {
  return {
    type: GET_ALL_DATA_ERROR,
    payload
  };
}



export const getCartItem = () => (dispatch)=> {
  const url = "https://jsonplaceholder.typicode.com/users";
  const result = getData(url);
   Promise.resolve(result).then((res1) => {
    dispatch({
      type: GET_ALL_DATA_SUCCESS,
      payload:res1.data
    })
  });
};


