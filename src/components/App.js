import "../styles/App.scss";
import "../styles/core/reset.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

import ls from "../services/localStorage";
import getApiData from "../services/moviesApi";

import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  const [moviesData, setMoviesData] = useState(ls.get("moviesData", []));
  const [searchNameValue, setSearchNameValue] = useState(
    ls.get("searchNameValue", "")
  );
  const [filterYears, setFilterYears] = useState(ls.get("filterYears", ""));

  useEffect(() => {
    if (moviesData.length === 0) {
      getApiData().then((dataApi) => {
        setMoviesData(dataApi);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("moviesData", moviesData);
    ls.set("filterYears", filterYears);
    ls.set("searchNameValue", searchNameValue);
  }, [moviesData, filterYears, searchNameValue]);

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
                searchNameValue={searchNameValue}
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
