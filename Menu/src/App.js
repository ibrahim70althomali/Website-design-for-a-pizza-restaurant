import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menuaa from './pages/Menuaa';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>

      <Navbar />

      <Switch>
      
        <Route path="/" exact component= {Home} />
        <Route path="/Menu" exact component={Menuaa} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>

      <Footer />

    </Router>

  </div>

  );
}

export default App;
