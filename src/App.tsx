import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Admin from './views/Admin';
import Login from './views/Login';
import Detail from './views/Detail';
import Buttons from './views/Buttons';
import NoMatch from './views/NoMatch';

import './App.css';

const App: FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/admin">
        <Admin>
          <Switch>
            <Route path="/admin/ui/buttons" component={Buttons} />
          </Switch>
        </Admin>
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/detail" component={Detail} />
      <Route component={NoMatch} />
    </Switch>
  </HashRouter>
);

export default App;