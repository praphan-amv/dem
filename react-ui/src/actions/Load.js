import { get } from '../api/utils';

export const LOADING_API = data => ({
  type: 'LOADING_API',
  payload: data,
});
export const LOAD_DATA = data => ({
  type: 'LOAD_DATA',
  payload: data,
});

export const LOAD_API = () => (dispatch) => {
  dispatch(LOADING_API('data'));
  get('/api/api.test').then((data) => {
    dispatch(LOAD_DATA(data));
    // should return some thing ok
  }, err => (0));
};

