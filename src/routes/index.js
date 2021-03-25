import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../screens/Dashboard';
import { GithubCallback } from '../screens/GithubCallback';

export function Routes() {
  return <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login/callback" exact component={GithubCallback} />
  </Switch>
}