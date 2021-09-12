import React from "react";
import ActiveSidebarReducer, {
  ActiveSidebarInitialState,
} from "./ActiveSidebarReducer";

export const ActiveSidebarDataLayerContext = React.createContext();

export default function ActiveSidebarDataLayer({ children }) {
  const [dataLayer, dispatch] = React.useReducer(
    ActiveSidebarReducer,
    ActiveSidebarInitialState
  );

  return (
    <ActiveSidebarDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </ActiveSidebarDataLayerContext.Provider>
  );
}

export const useActiveSidebarDataLayerValue = () =>
  React.useContext(ActiveSidebarDataLayerContext);
