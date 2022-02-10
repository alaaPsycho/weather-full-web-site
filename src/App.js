import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home';
import Weather from './components/Weather';
import Footer from './components/Footer';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <Routes>
        <Route  path={'/'} element={<Home />} />
        <Route  path={'/weather'} element={<Weather />} />
        <Route  path={'/about'} element={<About />} />
        <Route  path={'/blog'} element={<Blog />} />

        <Route  path={'/contact'} element={<Contact />} />

        <Route  path={'/sign-up'} element={<SignUp />} />


        <Route  path={'/login'} element={<Login />} />


      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
