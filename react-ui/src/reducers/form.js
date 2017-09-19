const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PANEL':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'LOAD':
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
