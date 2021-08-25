import {GET_ALL_DATA_SUCCESS,GET_ALL_DATA_ERROR,GET_ALL_DATA_REQUESTING} from "../actions/types";
  
  const initState = {
    products: [],
  };
  
  export default function  (state = initState, action) {
    switch (action.type) {
      case GET_ALL_DATA_REQUESTING: {
        return {
          ...state
        };
      }
  
      case GET_ALL_DATA_SUCCESS: {
        return {
          ...state,
          products: action.payload
        };
      }
  
      case GET_ALL_DATA_ERROR: {
        return {
          ...state,
          products: 0
        };
      }
      default:
        return state;
    }
  };
  

  
  