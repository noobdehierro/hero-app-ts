import { createContext } from "react";
import { Auth } from "../interfaces/interfaces";

export type ContextProps = {
  AuthState: Auth;
  startLogin: (email: string, password: string) => Promise<void>;
  startLogout:() => void
  startChecking: () => Promise<void>
  startRegister: (email: string, password: string, name: string) => void
};

export const AuthContext = createContext<ContextProps>({} as ContextProps);
