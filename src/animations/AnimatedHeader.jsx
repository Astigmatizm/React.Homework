import { motion } from "framer-motion"; // Анимации
import Header from "../components/Header"; // Подключаем обычный Header

const AnimatedHeader = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Начальное состояние (вне экрана)
      animate={{ y: 0, opacity: 1 }} // Конечное состояние (появляется сверху)
      transition={{ duration: 0.8, ease: "easeOut" }} // Длительность и плавность
    >
      <Header />
    </motion.div>
  );
};

export default AnimatedHeader;
