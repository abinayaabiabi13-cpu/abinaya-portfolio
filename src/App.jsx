import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Home />
        <About />
        <Resume />
        <Skills />
        <Contact />
      </div>

    </div>
  );
}

export default App;