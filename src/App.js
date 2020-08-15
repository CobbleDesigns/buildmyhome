import React from 'react';
import { BrowserRouter as Router, Route, Swtich } from 'react-router-dom'; 
import Switch from 'react-bootstrap/esm/Switch';

//pages
import Home from './pages/homePage'; 
import Gallery from './pages/GalleryPage';
import Contact from './pages/Contact'; 
import PageNotFound from './pages/PageNotFound'; 
import HiwPage from './pages/HowItWorksPage';
import Kitchen from './pages/Kitchen';
import Wardrobe from './pages/Wardrobe';   

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/how-it-works' component={HiwPage} />
          <Route exact path='/kitchen' component={Kitchen} />
          <Route exact path='/wardrobe' component={Wardrobe} />
          <Route exact path='/404' component={PageNotFound} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
