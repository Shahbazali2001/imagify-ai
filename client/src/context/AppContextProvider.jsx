import AppContext from "./AppContext";

import { useState } from "react";


const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);

  const values = {
    user,
    setUser,
    open,
    setOpen
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;