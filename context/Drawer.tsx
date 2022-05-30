import { Reducer } from "react";
import { Dispatch } from "react";
import { createContext, useReducer } from "react";

type State = {
  open: boolean;
};

type Action = {
  type: "TOGGLE";
  payload: State;
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...action.payload
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const DrawerContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: { open: false }, dispatch: () => {} });

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    open: false
  });
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
