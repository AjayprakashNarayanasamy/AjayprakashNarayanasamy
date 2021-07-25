import React from 'react';
import Todos from './Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ImageSearch from './ImageSearch/ImageSearch';



function App() {
  return (
    <Router>
      
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> UC Browser</a>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link className="nav-link"  to="/todos">Quora</Link>
        <Link className="nav-link" to="/imgsearch">HIGH QUALITY IMAGES</Link>
       
      </div>
    </div>
  </div>
</nav>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/todos">
          <Todos></Todos>
          </Route>
          <Route path="/imgsearch">
          <ImageSearch></ImageSearch>
          </Route>
          
          
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;



