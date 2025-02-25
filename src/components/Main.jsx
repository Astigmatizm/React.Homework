import { motion } from "framer-motion"; // Анимация
import { Button, Box, Typography, Avatar } from "@mui/material"; // Готовые материалы 
import { Link as RouterLink } from "react-router-dom"; // Для маршрутизации
import Platforms from "./Platforms";
import red from "../assets/redFace.jpg";

import '../styles/Main.css'
const Main = () => {
  return (
    <>
      {/* Блок "Обо мне" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
      >
        
        <Box
          sx={{
            display: "flex",
            padding: 4,
            backgroundColor: "#121212",
            maxWidth: "100wh",
            height: "110vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            paddingTop: "10vh", // Поднимаем вверх
          }}
        >
          <Avatar
            src={red}
            alt="Avatar"
            sx={{
              width: 170,
              height: 170,
              boxShadow: "0px 0px 45px rgb(0, 0, 0)",
              display: "flex",
              justifyContent: "center",
              position: "relative", top: "-10vh",
            }}
          />
          <Box>
             <Typography variant="h4" sx={{ color: "rgb(156, 43, 43)", fontWeight: "bold", position: "relative", top: "-110px", }}>
              <h2><strong style={{fontWeight: "bold" }}>Баухажан Санжар</strong></h2>
            </Typography>
            <Typography variant="body1" sx={{ color: "#ffffff", marginTop: 2, position: "relative", top: "-130px", fontSize: "25px"}}>
              {"Junior програмист познающий мир информационных технологии (IT)"
                .split(" ")
                .map((word, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "rgb(156, 43, 43)" }, // Цвет при наведении
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    {word}
                  </Box>
                ))}  
            </Typography>
            
            <Typography variant="body1" sx={{ color: "#ffffff", marginTop: 2, position: "relative", top: "-110px", fontSize: "20px"}}>
              {"Здрастуйте! Я Баухажан Санжар FullStack-разработчик в cфере web-разработки"
                .split(" ")
                .map((word, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "rgb(156, 43, 43)" }, // Цвет при наведении
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    {word}
                  </Box>
                ))}
            </Typography>

            <Typography variant="body1" sx={{ color: "#ffffff", marginTop: 2, position: "relative", top: "-80px", fontSize: "20px"}}>
              {"Работаю и работал на платформах IDE"
                .split(" ")
                .map((word, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "rgb(156, 43, 43)" }, // Цвет при наведении
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    {word}
                  </Box>
                ))}
            </Typography>
            <Platforms />
            
            <Button 
            component={RouterLink} // Используем Link из react-router-dom
            to="/about" // Переход на страницу "Обо мне"
            sx={{
              backgroundColor: 'rgb(156, 43, 43)', 
              color: "black", 
              marginTop: "30px" 
              }}
              > Подробнее </Button>

          </Box>
        </Box>
      </motion.div>

    </>
  );
};

export default Main;
