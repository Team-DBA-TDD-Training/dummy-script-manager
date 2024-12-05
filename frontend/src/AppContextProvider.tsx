import React, { createContext, useReducer, ReactNode, useContext } from "react";

interface State {
  isOn: boolean;
}

type Action = { type: "TOGGLE" };

const initialState: State = {
  isOn: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isOn: !state.isOn };
    default:
      return state;
  }
};


const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);


interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useToggle must be used within a AppContextProvider");
  }
  return context;
};
