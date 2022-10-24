import { useReducer, createContext } from "react";
import { defaultReducer } from "./reducers";
import types from "./types";

const initialState = {
  name: "John Doe",
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case types.SET_STATE:
        return defaultReducer(state, action);

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
