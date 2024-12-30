
import Headers from './components/Headers';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Headers/>
      <AboutMe />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
