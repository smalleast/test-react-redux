const visiblityFilter = (state, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.visiblityFilte;
    default:
      return state
  }
};
