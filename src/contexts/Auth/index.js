import * as React from "react";
import { AlertContext } from "../Alert";

export const AuthContext = React.createContext();

const lateLeagueAuth = localStorage.getItem("lateLeagueAuth");
const priorAuth = lateLeagueAuth ? JSON.parse(lateLeagueAuth) : {};
const startingAuth = lateLeagueAuth ? { ...priorAuth, isAuthed: true } : {};

// levibluephillips@gmail.com

export const AuthContextProvider = React.memo(props => {
  const [auth, setAuth] = React.useState(startingAuth);
  const alertContext = React.useContext(AlertContext);

  const onSuccess = React.useMemo(() => {
    return response => {
      localStorage.setItem("lateLeagueAuth", JSON.stringify(response));
      setAuth({ ...response, isAuthed: true });
      alertContext.queueAlert({
        type: "normal",
        text: "Logged in. :)",
        timeout: 3000
      });
    };
  }, [alertContext, setAuth]);

  const onFailure = React.useMemo(() => {
    return response => {
      localStorage.removeItem("lateLeagueAuth");
      alertContext.queueAlert({
        type: "danger",
        text: "Failed to log you in, homie.",
        timeout: 5000
      });
    };
  }, [alertContext]);

  const onLogoutSuccess = React.useMemo(() => {
    return response => {
      localStorage.removeItem("lateLeagueAuth");
      alertContext.queueAlert({
        type: "normal",
        text: "Logged you out, dawg.",
        timeout: 3000
      });
      setAuth({ isAuthed: false });
    };
  });

  const onLogoutFailure = React.useMemo(() => {
    return response => {
      localStorage.removeItem("lateLeagueAuth");
      alertContext.queueAlert({
        type: "danger",
        text: "Failed to log you out, homie.",
        timeout: 5000
      });
    };
  }, [alertContext]);

  const contextual = React.useMemo(() => {
    return {
      auth,
      setAuth,
      onSuccess,
      onFailure,
      onLogoutSuccess,
      onLogoutFailure
    };
  }, [auth, setAuth, onSuccess, onFailure]);

  return (
    <AuthContext.Provider value={contextual}>
      {props.children}
    </AuthContext.Provider>
  );
});
