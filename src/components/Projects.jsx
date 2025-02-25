import { motion } from "framer-motion"; // Анимации
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material"; // Готовые материалы 
import { styled } from "@mui/system"; // Стилизация компонентов

const projects = [
  { title: "Login Page", link: "https://github.com/Astigmatizm/Ayo_project/tree/proj-log" },
  { title: "To-do List", link: "https://github.com/Astigmatizm/React.Homework/tree/hw.lesson-3" },
  { title: "Кино-поиск", link: "https://github.com/Astigmatizm/React.Homework/tree/hw.lesson-9" },
  { title: "weather city API", link: "https://github.com/Astigmatizm/React.Homework/tree/hw.lesson-6" },
  { title: "Internet Shop Dj", link: "https://github.com/Astigmatizm/bboard_proj/tree/lesson_49" },
  { title: "Internet Shop C#", link: "https://github.com/Astigmatizm/InternetShop" },
];

const NeonCard = styled(Card)({
  backgroundColor: "#1e1e1e",
  border: "1px solid rgba(156, 43, 43, 0.8)",
  boxShadow: "0px 0px 10px rgba(156, 43, 43, 0.8)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 20px rgba(156, 43, 43, 1)",
  },
});

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#121212",
        }}
      >
        <Box id="projects" sx={{ minHeight: "1vh", padding: "50px", textAlign: "center", backgroundColor: "#121212" }}>
        <Typography variant="h2" color="#ffffff" fontWeight='6w00' gutterBottom>
          Мои проекты
        </Typography>
      </Box>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <CardActionArea component="a" href={project.link} target="_blank" rel="noopener noreferrer">
                  <NeonCard>
                    <CardContent>
                      <Typography variant="h5" color="white">
                        {project.title}
                      </Typography>
                    </CardContent>
                  </NeonCard>
                </CardActionArea>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Projects;
