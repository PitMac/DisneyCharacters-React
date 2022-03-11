import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharactersList } from "./components/CharactersList";
import { NavBar } from "./components/NavBar";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CharactersList />} />
          <Route path="character/:id" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
