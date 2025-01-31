import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // useParams для извлечения id фильма, useNavigate для перехода назад
import './MovieDetail.css';

const movies = [
  { id: 1, title: 'Интерстеллар', description: 'Фильм о космосе и времени.' },
  { id: 2, title: 'Начало', description: 'Фильм о сновидениях и реальности.' },
  { id: 3, title: 'Темный рыцарь', description: 'Бэтмен борется с преступностью в Готэме.' },
  { id: 4, title: 'Матрица', description: 'Фильм о виртуальной реальности.' },
  { id: 5, title: 'Аватар', description: 'Фантастическая история на далекой планете.' },
];

function MovieDetail() {
  const { id } = useParams();  // Получаем id фильма из URL
  const navigate = useNavigate();  // Для перехода назад
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Фильм не найден!</div>;  // Если фильм не найден, показываем ошибку
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <button onClick={() => navigate(-1)}>Назад</button>  {/* Кнопка для возврата назад */}
    </div>
  );
}

export default MovieDetail;
