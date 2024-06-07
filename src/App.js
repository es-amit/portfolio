import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg";
function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Home />
        <About />
        <SocialLinks />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <div>
        <ParticlesBg />
      </div>
    </div>
  );
}

export default App;
