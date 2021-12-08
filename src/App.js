import React, { useContext } from "react";

import { AuthContext } from "./providers/index";

import DataGridComponent from "./components/dataGrid";
import CardComponet from "./components/card";
import AppBarComponemt from "./components/navBar";

function App() {
  const dataProvider = useContext(AuthContext);
  const { title } = dataProvider;

  return (
    <div>
      <AppBarComponemt title={title} />
      <DataGridComponent />
      <CardComponet />
    </div>
  );
}

export default App;
