import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./components/detail/Detail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFonud";
import { Search } from "./components/search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
