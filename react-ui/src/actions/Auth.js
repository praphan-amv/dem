import * as CONSTANTS from '../constants';

export const Login = data => (dispatch) => {
  dispatch({
    type: CONSTANTS.LOGGINGIN,
    data,
  });
  // call api
};

export const Logout = data => (dispatch) => {
  dispatch({
    type: CONSTANTS.LOGGINGOUT,
    data,
  });
  // call api
};
