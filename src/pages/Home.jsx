import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const mockMovies = [
  { id: 1, title: "Inception", year: 2010, poster: "https://via.placeholder.com/150" },
  { id: 2, title: "Interstellar", year: 2014, poster: "https://via.placeholder.com/150" },
  { id: 3, title: "The Dark Knight", year: 2008, poster: "https://via.placeholder.com/150" },
];

function Home({ toggleFavorite }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title} ({movie.year})</h3>
          <button onClick={() => toggleFavorite(movie)}>❤ Добавить в избранное</button>
          <Link to={`/movie/${movie.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;