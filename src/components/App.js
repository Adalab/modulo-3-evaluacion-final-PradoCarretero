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
import Favorites from "./Favorites";

function App() {
  const [moviesData, setMoviesData] = useState(ls.get("moviesData", []));
  const [searchNameValue, setSearchNameValue] = useState(
    ls.get("searchNameValue", "")
  );
  const [filterYears, setFilterYears] = useState(ls.get("filterYears", ""));
  const [favoriteList, setFavoriteList] = useState(ls.get("favoriteList", []));

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
    ls.set("favoriteList", favoriteList);
  }, [moviesData, filterYears, searchNameValue, favoriteList]);

  const handleInputName = (value) => {
    setSearchNameValue(value);
  };

  const handleInputYear = (value) => {
    setFilterYears(value);
  };

  const handleReset = () => {
    setSearchNameValue("");
    setFilterYears("");
    setFavoriteList([]);
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

  const addListFavorite = (valueId, isFav) => {
    const movieFoundFav = moviesData.find((movie) => movie.id === valueId);
    if (isFav === true) {
      console.log("te saco");
      /*  movieFoundFav.favorite = false; */
      console.log(movieFoundFav);
      favoriteList.splice(movieFoundFav, 1);
      console.log(favoriteList);
    } else {
      console.log("te meti");
      /*  movieFoundFav.favorite = true; */
      console.log(movieFoundFav);
      console.log(movieFoundFav.length);
      console.log(favoriteList.length);
      /* setFavoriteList("maria");
      setFavoriteList([...favoriteList, "maria"]); */
      setFavoriteList([...favoriteList, movieFoundFav]);
      console.log(favoriteList);
    }
  };
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
                addListFavorite={addListFavorite}
                favoriteList={favoriteList}
              />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail movieFound={movieFound} />}
        />
        <Route
          path="/favoritos"
          element={<Favorites moviesData={favoriteList} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
