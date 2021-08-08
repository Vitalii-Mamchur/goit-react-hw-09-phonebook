import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import routes from "./routes";
import "./styles.css";
import AppBar from "./components/AppNavBar";
import Spinner from "./components/Loader";
import Container from "./components/Container";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /*webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /*webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView.js" /*webpackChunkName: "contacts-view" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.home}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.home}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
