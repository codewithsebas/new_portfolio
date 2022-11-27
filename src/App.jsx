import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <div className="w-full h-full font-poppins duration-200 bg:white dark:bg-black/90 dark:text-white/50">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
