import { Container, Typography, Box, Stack } from "@mui/material"; // Готовые материалы 
import { motion } from "framer-motion"; // Анимации
import { SiReact, SiDjango, SiHtml5, SiCss3, SiJavascript, SiMui, SiPython, SiPostgresql, SiDotnet,  SiCplusplus, SiSolidity } from "react-icons/si"; // Иконки

const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
      >
    <Container maxWidth="md" sx={{ color: "#121212", mt: 4, textAlign: "center", height: '900px', paddingTop: "90px"}}>
      {/* Заголовок */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "rgb(156, 43, 43)", }}>
        Обо мне
      </Typography>

      {/* Краткая информация */}
      <Typography variant="h6" paragraph>
        Привет! Я <b>Сан</b> – Fullstack-разработчик.  
        Работаю с <b>React</b> и <b>Django</b>.  
        Увлекаюсь играми и применением своих знаний в повседневной жизни.
      </Typography>

      {/* Навыки */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Навыки и Технологии
        </Typography>
        
        {/* Текущий стек */}
        <Typography variant="h6" sx={{ mt: 2, color: "rgb(156, 43, 43)" }}>
          Работаю с:
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <SiHtml5 size={40} color="#E34F26" />
          <SiCss3 size={40} color="#1572B6" />
          <SiJavascript size={40} color="#F7DF1E" />
          <SiReact size={40} color="#61DAFB" />
          <SiMui size={40} color="#007FFF" />
          <SiDjango size={40} color="#092E20" />
        </Stack>

        {/* Ранее работал */}
        <Typography variant="h6" sx={{ mt: 3, color: "rgb(156, 43, 43)" }}>
          Ранее работал с:
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <SiPython size={40} color="#3776AB" />
          <SiPostgresql size={40} color="#336791" />
          <SiDotnet size={40} color="#239120" />
          <SiCplusplus size={40} color="#00599C" />
          <SiSolidity size={40} color="#363636" />
        </Stack>
      </Box>

      <Box sx={{ mt: 5 }}>
        {/* Факты обо мне */}
        <Typography variant="h5" sx={{fontWeight: "bold", mb: 2 }} paragraph>
          Вопросы и Факты
        </Typography>
        <Typography variant="body1" sx={{color: "rgb(47, 67, 148)"}} paragraph>
          1. Как ты познакомился с програмированием?
        </Typography>
        <Typography variant="body1" paragraph>
          Благодаря брату и отцу.
        </Typography>
        <Typography variant="body1" sx={{color: "rgb(47, 67, 148)"}} paragraph>
          2. Зачем мне програмирование?
        </Typography>
        <Typography variant="body1" paragraph>
          Знания - програмирование это ключ к будущему, Деньги - важный инструмент
        </Typography>
        <Typography variant="body1" sx={{color: "rgb(47, 67, 148)"}} paragraph>
          3. Чем увлекаюсь помимо програмирования?
        </Typography>
        <Typography variant="body1" paragraph>
          футбол, игры, спринт-ран, волейбол, бег, Настольный теннис, чтение(статьи или манги).
        </Typography>
        <Typography variant="body1" sx={{color: "rgb(47, 67, 148)"}} paragraph>
          4. Моя цель в програмировании
        </Typography>
        <Typography variant="body1" paragraph>
          Узнать больше, попробовать больше, делать классные вещи. Web is Fun
        </Typography>
      </Box>
    </Container>
  </motion.div>
  );
};

export default About;
