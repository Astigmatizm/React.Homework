import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from "@mui/material"; // Готовые материалы 
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link as RouterLink } from "react-router-dom"; // Для маршрутизации

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgb(88, 25, 25)" }}>
      <Toolbar>
        {/* Логотип */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Портфолио
        </Typography>

        {/* Навигация */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/" smooth={true} duration={800} offset={-70}>
            Главная
          </Button>
          <Button color="inherit" component={RouterLink} to="about" smooth={true} duration={800} offset={-70}>
            Обо мне
          </Button>
          <Button color="inherit" component={RouterLink} to="projects" smooth={true} duration={800} offset={-70}>
            Проекты
          </Button>
          <Button color="inherit" component={RouterLink} to="contact" smooth={true} duration={800} offset={-70}>
            Контакт
          </Button>
        </Box>

        {/* Иконки соцсетей */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 2 }}>
          <IconButton color="inherit" href="https://github.com" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://t.me" target="_blank">
            <TelegramIcon />
          </IconButton>
        </Box>

        {/* Бургер-меню */}
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen} sx={{ display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <RouterLink to="/projects">Проекты</RouterLink>
          <MenuItem onClick={handleMenuClose}>
            <RouterLink to="/about">Обо мне</RouterLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <RouterLink to="/skills">Навыки</RouterLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <RouterLink to="/contact">Контакт</RouterLink>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
