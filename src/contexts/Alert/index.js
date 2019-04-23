import * as React from 'react';

export const AlertContext = React.createContext({});

let alertCount = 0;

export const AlertContextProvider = React.memo(props => {
  const [alerts, setAlerts] = React.useState([]);

  const queueAlert = alert => {
    const timeout = alert.timeout || 3000;
    const index = alertCount++;
    alert.alertIndex = index;

    setAlerts([...alerts, alert]);

    setTimeout(() => {
      setAlerts(
        alerts.filter(a => {
          return a.alertIndex !== index;
        }),
      );
    }, timeout);
  };

  const contextual = {
    alerts,
    setAlerts,
    queueAlert,
  };

  return (
    <AlertContext.Provider value={contextual}>
      {props.children}
    </AlertContext.Provider>
  );
});
