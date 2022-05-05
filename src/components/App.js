import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

import getApiData from "../services/moviesApi";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchNameValue, setSearchNameValue] = useState("");
  const [filterYears, setFilterYears] = useState("");

  useEffect(() => {
    getApiData().then((dataApi) => {
      setMoviesData(dataApi);
    });
  }, []);

  const handleInputName = (value) => {
    setSearchNameValue(value);
  };

  const handleInputYear = (value) => {
    setFilterYears(value);
  };

  const movieFilters = moviesData
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(searchNameValue.toLowerCase());
    })
    .filter((movie) => {
      return filterYears === ""
        ? true
        : parseInt(movie.year) === parseInt(filterYears);
    });
  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = moviesData.find((movie) => movie.id === parseInt(movieId));

  return (
    <>
      <h1>Owen Wilson's "wow</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleInputName={handleInputName}
                movieFilters={movieFilters}
                handleInputYear={handleInputYear}
                filterYears={filterYears}
              />
              <MovieSceneList
                moviesData={movieFilters}
                searchNameValue={searchNameValue}
                filterYears={filterYears}
              />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail movie={movieFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
