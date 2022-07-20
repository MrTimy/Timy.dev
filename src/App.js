import './App.css';
import Particles from './components/Particles';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';

function App() {
  return (
    
    <div className="App">
      <Header />
      
      <Particles id="tsparticles"/>
      <Landing />
      <About />
      
    </div>
  );
}

export default App;
