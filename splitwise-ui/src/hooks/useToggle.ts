import { useReducer } from "react";

function useToggle(initVal = false) {
  const [state, toggleState] = useReducer((p) => !p, initVal);
  return [state, toggleState];
}

export default useToggle;
