import { Route, Switch } from "wouter";
import { CharactersList } from "./components/CharactersList";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import NotFound from "./pages/404Page";
import CharacterPage from "./pages/CharacterPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={HomePage} />
        <Route path="/character/:id" component={CharacterPage} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
