import { useReducer } from "react";
import { fetchConToken, fetchSinToken } from "../helpers/authFetch";
import { Auth } from "../interfaces/interfaces";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

interface PropsContext {
  children: JSX.Element | JSX.Element[];
}

const authState: Auth = {
  checking: true,
  uid: "",
  name: "",
};

export const AuthProvider = ({ children }: PropsContext) => {
  const [AuthState, dispatch] = useReducer(AuthReducer, authState);

  const startLogin = async (email: string, password: string) => {
    const resp = await fetchSinToken("auth", { email, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch({
        type: "authLogin",
        payload: {
          uid: body.uid,
          name: body.name,
        },
      });
    }
  };

  const startLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");

    dispatch({ type: "authLogout" });
  };

  const startChecking = async () => {
    const resp = await fetchConToken("auth/renew");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch({
        type: "authLogin",
        payload: {
          uid: body.uid,
          name: body.name,
        },
      });
    } else {
      dispatch({ type: "authCheckingFinish" });
    }
  };

  const startRegister = async (
    email: string,
    password: string,
    name: string
  ) => {
    const resp = await fetchSinToken(
      "auth/new",
      { email, password, name },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch({
        type: "authLogin",
        payload: {
          uid: body.uid,
          name: body.name,
        },
      });
    } else {
      console.log(body.msg);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        AuthState,
        startLogin,
        startLogout,
        startChecking,
        startRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
