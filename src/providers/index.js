import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProviders = (props) => {
  const title = "Covid Statistics";
  const [countrySelect, setCountrySelect] = useState({
    Cases: "22.157.726",
    CasesPerMillion: "103.193",
    Country: "Brazil",
    Population: "214.722.227",
    TotalDeaths: "616.067",
    TotalDeathsPerMillion: "2.869",
    id: 186,
    lastUpdate: "2021-12-08",
  });

  return (
    <AuthContext.Provider value={{ title, countrySelect, setCountrySelect }}>
      {props.children}
    </AuthContext.Provider>
  );
};
