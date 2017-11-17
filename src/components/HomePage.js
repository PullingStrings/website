import React from 'react';
import { Link} from 'react-router-dom';


class HomePage extends React.Component {

  render() {
    return (
      <div className="HomePage">
        <div className="HomePageContainer">
          <div className="InnerContainer">
            <div className="BoxInner">
              <h1>My Name is Tito and I am a Junior Web Developer</h1>
            </div>
            <div className="BoxInner">
              <div className="Button">
                <Link to="/about" className="nav-link">
                  <h1>About Me</h1>
                </Link>
              </div>
            </div>
            <div className="BoxInner">
              <div className="Button">
                <Link to="/projects" className="nav-link">
                  <h1>Projects</h1>
                </Link>
              </div>
            </div>
            <div className="BoxInner">
              <div className="Button">
                <Link to="/experience" className="nav-link">
                  <h1>Experiences</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
