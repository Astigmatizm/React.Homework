import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import "./style.css";

function App() {
  const [favorites, setFavorites] = useState([]);

    useEffect(() => {    // Загружает избранные фильмы при старте
      const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
      setFavorites(savedFavourites);
    }, []);    

    const toggleFavorite = (movie) => {
      setFavorites((prevFavorites) => {      // Проверяет, есть ли фильм в избранном
  
        const isFavourite = prevFavorites.some((fav) => fav.id === movie.id);
    

        const updatedFavorites = isFavourite
          ? prevFavorites.filter((fav) => fav.id !== movie.id)  // Если есть — удаляем, если нет — добавляем
          : [...prevFavorites, movie];
    

        localStorage.setItem("favourites", JSON.stringify(updatedFavorites));// Сохраняем в локалке
    
        return updatedFavorites;
      });
    };

  return (
    <Router>
      <header className="navbar">
        <h1>Кинопоиск</h1>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/search">Поиск</Link>
          <Link to="/favorites">Избранное</Link>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home toggleFavorite={toggleFavorite} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;