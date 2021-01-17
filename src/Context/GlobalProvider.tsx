import React, { createContext, useReducer } from "react";
const GlobalContext = createContext({} as IContext);

interface PropTypes {
  children: React.ReactNode;
}

interface IContext {
  dispatch: any;
  toggleSidebar: any;
}

const initialState: boolean = false;

const ACTIONS = {
  sidebarToggle: "sidebarToggle",
};

const GlobalProvider: React.FC<PropTypes> = ({ children }) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTIONS.sidebarToggle:
        return toggleMenu(state, action);
    }
  };

  const toggleMenu = (sidebarToggle: boolean, action: any) => {
    if (action.payload.toggleSidebar) return (sidebarToggle = true);
    if (!action.payload.toggleSidebar) return (sidebarToggle = false);
  };

  const [toggleSidebar, dispatch] = useReducer<any>(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ dispatch, toggleSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
