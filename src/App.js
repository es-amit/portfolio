import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ParticlesBackground from "./components/ParticlesBackground";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <ParticlesBackground />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
