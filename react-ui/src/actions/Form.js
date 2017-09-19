
export const AddPanel = () => (dispatch) => {
  dispatch({
    type: 'ADD_PANEL',
  });
};


/**
 * Simulates data loaded into this reducer from somewhere
 */
export const LOAD = data => (dispatch) => {
  dispatch({
    type: 'LOAD',
    data,
  });
};

export default '10';
