import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const mockMovies = [
    { id: 1, title: "Inception", year: 2010, poster: "https://via.placeholder.com/150" },
    { id: 2, title: "Interstellar", year: 2014, poster: "https://via.placeholder.com/150" },
    { id: 3, title: "The Dark Knight", year: 2008, poster: "https://via.placeholder.com/150" },
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setFilteredMovies(
      mockMovies.filter((movie) =>
        movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Поиск фильмов</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Введите название фильма..."
      />
      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title} ({movie.year})</h3>
            <Link to={`/movie/${movie.id}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;