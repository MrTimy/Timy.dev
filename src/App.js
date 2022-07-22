import "./App.css";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Porfolio from "./components/Porfolio";

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Particles id="tsparticles" />
        <Landing />
        <About />
        <Porfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;
