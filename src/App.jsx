import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Маршутизация
import { CssBaseline } from "@mui/material"; // Готовые материалы 
import PageWrapper from "./animations/PageWrapper";
import AnimatedHeader from "./animations/AnimatedHeader";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <PageWrapper>
        <CssBaseline />
        <AnimatedHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;