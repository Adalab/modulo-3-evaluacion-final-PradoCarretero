import "../styles/App.scss";
import "../styles/core/reset.scss";
import "../styles/core/mediaqueries.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

import ls from "../services/localStorage";
import getApiData from "../services/moviesApi";

import MovieSceneList from "./MovieSceneList";
import Header from "./Header";
import MovieSceneDetail from "./MovieSceneDetail";
import PageNotFound from "./PageNotFound";

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
    moviesData.sort(function (a, b) {
      const movieA = a.movie.toUpperCase();
      const movieB = b.movie.toUpperCase();
      if (movieA < movieB) {
        return -1;
      }
      if (movieA > movieB) {
        return 1;
      }
      return 0;
    });
  });

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

  const handleReset = () => {
    setSearchNameValue("");
    setFilterYears("");
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
              <Header
                handleInputName={handleInputName}
                movieFilters={movieFilters}
                handleInputYear={handleInputYear}
                filterYears={filterYears}
                searchNameValue={searchNameValue}
                handleReset={handleReset}
              />
              <MovieSceneList
                movieFilters={movieFilters}
                searchNameValue={searchNameValue}
                filterYears={filterYears}
                moviesData={moviesData}
              />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail movieFound={movieFound} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
