import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
};

// REDUCER
export default function (state = initialState, action) {
  const { type, payload } = action;


  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };

    case LOGOUT_SUCCESS:
  
    case LOGIN_FAIL:
    case REGISTER_SUCCESS:
      return { ...state, user: { ...payload }, isAuthenticated: false };
     
    default:
      return state;
  }
}
