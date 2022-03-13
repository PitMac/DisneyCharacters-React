import { Route, Switch } from "wouter";
import { CharactersList } from "./components/CharactersList";
import { NavBar } from "./components/NavBar";
import NotFound from "./pages/404Page";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CharactersList} />
        <Route path="/:id" component={CharactersList} />
        <Route path="/character/:id" component={CharacterPage} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
