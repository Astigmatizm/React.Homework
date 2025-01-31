import React from 'react';
import { Link } from 'react-router-dom';  // Для перехода по ссылкам
import './MovieList.css';

const movies = [
  { id: 1, title: 'Интерстеллар', description: 'Фильм о космосе и времени.' },
  { id: 2, title: 'Начало', description: 'Фильм о сновидениях и реальности.' },
  { id: 3, title: 'Темный рыцарь', description: 'Бэтмен борется с преступностью в Готэме.' },
  { id: 4, title: 'Матрица', description: 'Фильм о виртуальной реальности.' },
  { id: 5, title: 'Аватар', description: 'Фантастическая история на далекой планете.' },
];

function MovieList() {
  return (
    <div className="movie-list">
      <h1>Галерея фильмов</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="movie-link">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
