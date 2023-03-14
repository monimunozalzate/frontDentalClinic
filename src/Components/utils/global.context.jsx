import { createContext, useReducer } from "react";


export const ContextGlobal = createContext();

const reducerFunction = (state, { type }) => {

  switch (type) {
    case "dark":
      return {
        bgFlag: "light",
        bgColor: "#fff",
      }
    case "light":
      return {
        bgFlag: "dark",
        bgColor: "rgba(0, 0, 0, 0.38)"
      }
    default:
      return state;
  }

}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const initalState = { bgFlag: "light", bgColor: "#fff" }
  const [state, dispatch] = useReducer(reducerFunction, initalState);

  const data = {
    state,
    dispatch,
  };

  return (
    <ContextGlobal.Provider value={ data }>      
        {children}      
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
