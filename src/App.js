import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap-css-only';
import './scss/style.scss';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
          </nav>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/projects" component={ProjectsPage}/>
          <Route path="/experience" component={ExperiencePage}/>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
