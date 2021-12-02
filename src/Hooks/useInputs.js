import { useReducer, useCallback } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
  }
};

const useInputs = (initialForm) => {
  const [inputState, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback(({ target }) => {
    dispatch({ type: "INPUT", payload: target });
  }, []);

  const resetInput = (name, value) => {
    dispatch({ type: "INPUT", payload: { name, value } });
  };

  return [inputState, onChange, resetInput];
};

export default useInputs;
