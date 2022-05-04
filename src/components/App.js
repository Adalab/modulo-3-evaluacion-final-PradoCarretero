import "../styles/App.scss";
import { useState, useEffect } from "react";
import getApiData from "../services/moviesApi";
import MovieList from "./MovieList";
import Filters from "./Filters";

function App() {
  const [searchNameValue, setSearchNameValue] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getApiData().then((dataApi) => {
      setMoviesData(dataApi);
    });
  }, []);
  const handleInputName = (value) => {
    setSearchNameValue(value);
  };
  const movieFilters = moviesData.filter((movie) => {
    return movie.movie.toLowerCase().includes(searchNameValue.toLowerCase());
  });

  return (
    <>
      <h1>Owen Wilson's "wow</h1>
      <Filters handleInputName={handleInputName} movieFilters={movieFilters} />
      <MovieList moviesData={movieFilters} />
    </>
  );
}

export default App;
