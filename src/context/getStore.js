import { useContext } from "react";
import { store } from "./context/store";

const useStore = () => {
  const { state, dispatch } = useContext(store);
  return [state, dispatch];
};

export { useStore };
