import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Vid from './Pages/Gallery';
import Services from './Components/Services/Services';
import Gallery from './Pages/Gallery';
import Contactus from './Components/Contact Us/Contactus';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Aboutus' exact component={Aboutus} />
        <Route path='/Gallery' exact component={Gallery} />
        <Route path='/Contactus' exact component={Contactus} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
