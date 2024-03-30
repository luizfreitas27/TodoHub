import { createContext } from "react";

const loginContext = createContext({});

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("ola");
  return <loginContext.Provider value={{}}>{children}</loginContext.Provider>;
};
