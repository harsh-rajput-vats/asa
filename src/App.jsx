import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn/LogIn";
import Dashboard from "./pages/Dashboard";
import { useKeycloak } from "@react-keycloak/web";

function App() {
  const { keycloak } = useKeycloak();

  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      {keycloak.authenticated ? (
        <Route path="/home" component={Dashboard} />
      ) : (
        <Route path="/login" component={LogIn} />
      )}
    </Switch>
  );
}

export default App;
