import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { Script } from "./Script";

interface State {
  showHistory: boolean;
  scripts: Script[];
  currentScript: Script;
  isNew: boolean;
  hasUnsavedChanged: boolean;
}

type Action =
  | { type: "TOGGLE" }
  | { type: "UPDATE_SCRIPTS"; payload: Script[] }
  | { type: "SET_CURRENT_SCRIPT"; payload: Script }
  | { type: "SET_IS_NEW"; payload: boolean }
  | { type: "SET_HAS_UNSAVED_CHANGES"; payload: boolean };

const initialState: State = {
  showHistory: false,
  scripts: [],
  currentScript: {
    title: "",
    code: "",
  },
  isNew: true,
  hasUnsavedChanged: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, showHistory: !state.showHistory };
    case "UPDATE_SCRIPTS":
      return { ...state, scripts: action.payload };
    case "SET_CURRENT_SCRIPT":
      return { ...state, currentScript: action.payload };
    case "SET_IS_NEW":
      return { ...state, isNew: action.payload };
    case "SET_HAS_UNSAVED_CHANGES":
      return { ...state, hasUnsavedChanged: action.payload };
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

export const AppContextProvider: React.FC<AppProviderProps> = ({
  children,
}) => {
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
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
