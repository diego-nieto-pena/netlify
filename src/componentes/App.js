import React from 'react';
import {makeMainRoutes} from './../componentes/routes';

const routes = makeMainRoutes();

function App() {
  return (
    <React.Fragment>
      {routes}
    </React.Fragment>
  );
}

export default App;
