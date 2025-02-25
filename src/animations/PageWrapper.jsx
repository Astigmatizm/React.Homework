import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Маршрутизация
import { motion } from "framer-motion"; // Анимации
import { CircularProgress } from "@mui/material"; // Спиннер MUI

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Отслеживаем смену страниц

  useEffect(() => {
    setIsLoading(true); // Начинаем загрузку при каждом новом пути
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Задержка 1 секунда

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, [location.pathname]); // Запускаем эффект при изменении URL

  return (
    <>
      {isLoading ? (
        // Экран загрузки
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#121212", // Сразу тёмный фон
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        // Анимация появления страницы
        <motion.div
          key={location.pathname} // Уникальный ключ для перерендера
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default PageWrapper;
