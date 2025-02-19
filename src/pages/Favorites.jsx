import React, { useState, useEffect } from "react";

function Favourites() {
  const [favourites, setFavourites] = useState([]);


  useEffect(() => {  // Он получает избранные фильмы из локалки при загрузке страницы
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  // Удаление одного фильма
  const removeFromFavourites = (id) => {
    const updatedFavourites = favourites.filter(movie => movie.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };


  const clearFavourites = () => {  // Очистка всех избранных фильмов
    setFavourites([]);
    localStorage.removeItem("favourites");
  };

  return (
    <div className="favourites-container">
      <h1>Избранные фильмы</h1>

      {favourites.length > 0 ? (
        <>
          <button className="clear-btn" onClick={clearFavourites}>
            Очистить всё избранное
          </button>
          <div className="movies-grid">
            {favourites.map(movie => (
              <div key={movie.id} className="movie-card">
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title} ({movie.year})</h3>
                <button className="remove-btn" onClick={() => removeFromFavourites(movie.id)}>
                  Удалить из избранного
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="empty-message">У вас нет избранных фильмов</p>
      )}
    </div>
  );
}

export default Favourites;
