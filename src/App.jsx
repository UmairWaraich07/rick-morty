import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Filters } from "./components/Filters/Filters";
import { Cards } from "./components/Cards/Cards";
import { useState, useEffect, createContext } from "react";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import CardsDetails from "./components/Cards/CardsDetails";

export const AppContext = createContext();

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardsDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardsDetails />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<CardsDetails />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&status=${status}&gender=${gender}&species=${specie}`;

  const { info, results } = fetchedData;

  useEffect(() => {
    (async () => {
      const data = await fetch(api);
      const response = await data.json();
      setFetchedData(response);
    })();
  }, [api]);

  return (
    <AppContext.Provider
      value={{ setPageNumber, setStatus, setGender, setSpecie }}
    >
      <div className="app">
        <h1 className="text-center my-4">Characters</h1>
        <Search setPageNumber={setPageNumber} setName={setName} />
        <div className="container">
          <div className="row">
            <Filters />
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards page="/" results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
