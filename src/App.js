import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Menu />

      <Switch>
        <Route exact path="/">
          <Redirect to="/docs" />
        </Route>

        <Route exact path="/docs" component={Docs} />

        <Route path="/tutorial">
          <Tutorials />
        </Route>

        <Route path="/community" render={() => <Community />} />

        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
