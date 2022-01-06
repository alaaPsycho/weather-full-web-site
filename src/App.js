import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
     <NavBar />
     <Hero />
     </Router>
    </div>
  );
}

export default App;
