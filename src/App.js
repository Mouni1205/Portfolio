import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import ExploreMore from './components/ExploreMore';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="awards"><Awards /></section>
      <section id="exploremore"><ExploreMore /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
