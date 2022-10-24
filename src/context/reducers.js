const defaultReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      throw new Error();
  }
};

export { defaultReducer };
