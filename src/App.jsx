import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';  // Импорт компонента списка фильмов
import MovieDetail from './components/MovieDetail';  // Импорт компонента деталей фильма
import NotFound from './components/Status400+/NotFound';  // Импорт компонента страницы ошибки

function App() {
  return (
    <div>

        <Routes>
          {/* Главная страница с списком фильмов */}
          <Route path="/" element={<MovieList />} />

          {/* Страница с деталями фильма, id фильма передается через URL */}
          <Route path="/movie/:id" element={<MovieDetail />} />

          {/* Страница 404, если маршрут не найден */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
