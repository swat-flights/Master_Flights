const reducer = (state, actions) => {
  switch (actions.type) {
    case 'LIST_USER': {
      return {
        state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
