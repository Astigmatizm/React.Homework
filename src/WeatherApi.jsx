import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  // Состояния для хранения данных погоды и ошибок
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Almaty');
//   const city = 'Moscow';  // Используйте правильное название города

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '804dd4165d67c3bcf91cc1415b1888bd'; // Ключ от OpenWeatherMap

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );
        
        if (response.status === 200) {
            setWeather(response.data);
        } else {
            setError('Не удалось получить данные. Статус ошибки: ' + response.status); // Изначально его не должно быть но мой апи ключ не работал и я намеренно его сделал ради дп.анализа ошибки
        }
    } catch (err) {
        setError('Ошибка при получении данных: ' + err.message);
    } finally {
        setLoading(false);
    }
};


  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="weather-app">
      <h1>Прогноз погоды</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите название города"
      />
      <button onClick={fetchWeather}>Получить погоду</button>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Температура: {weather.main.temp}°C</p>
          <p>Влажность: {weather.main.humidity}%</p>
          <p>Скорость ветра: {weather.wind.speed} м/с</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
