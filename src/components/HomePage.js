import React from 'react';

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
              <h1>About Me</h1>
            </div>
            <div className="BoxInner">
              <h1>Some of my projects</h1>
            </div>
            <div className="BoxInner">
              <h1>The experience I have had</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
