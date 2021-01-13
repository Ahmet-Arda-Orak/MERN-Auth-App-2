import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/signin';
import SignUp from '../components/signup';
import DashBoard from '../components/Dashboard';
import AuthApi from '../utils/AuthApi';


function Routes() {
  const authApi = useContext(AuthApi);
  return (
    <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/signup" /> 
                    )
                }}
              />

<RouteRegisteration
        path="/signin"
        component={SignIn}
        auth={authApi.auth}
      />
      <RouteRegisteration
        path="/signup"
        component={SignUp}
        auth={authApi.auth}
      />
      <RouteProtected
        path="/dashboard"
        component={DashBoard}
        auth={authApi.auth}
      />
    </Switch>
  );
}

const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

const RouteProtected = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;