import React from 'react';
import { BrowserRouter as Router, Route, Swtich, Link } from 'react-router-dom'; 
import Switch from 'react-bootstrap/esm/Switch';

//pages
import Home from './pages/homePage'; 
import Gallery from './pages/GalleryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
