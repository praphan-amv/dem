import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { responsiveStateReducer } from 'redux-responsive';

import counter from './counter';
import frm from './form';

export default combineReducers({
  navigator: routerReducer,
  form: reduxFormReducer,
  browser: responsiveStateReducer,
  counter,
  frm,
});
