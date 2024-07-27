import { Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import CocktailCodePage from "./pages/CocktailCodePage";
import RandomUsersPage from "./pages/RandomUsersPage";
import RandomUsersCodePage from "./pages/RandomUsersCodePage";
import RickMortyPage from "./pages/RickMortyPage";
import RickMortyCodePage from "./pages/RickMortyCodePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail" element={<CocktailPage />} />
        <Route path="/cocktail/code" element={<CocktailCodePage />} />
        <Route path="/random-users" element={<RandomUsersPage />} />
        <Route path="/random-users/code" element={<RandomUsersCodePage />} />
        <Route path="/rick-morty" element={<RickMortyPage />} />
        <Route path="/rick-morty/code" element={<RickMortyCodePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
