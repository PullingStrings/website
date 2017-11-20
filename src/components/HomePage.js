import React from 'react';
// import { Link} from 'react-router-dom';
// import pic from '../images/homepagePic.jpg';


class HomePage extends React.Component {

  render() {
    return (
      <main>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Tito Here</h1>
            <p>Full Stack Web developer that loves art, music and travel.</p>
          </div>
        </div>
        <div className="container-fluid bg-3 text-center">
          <h3>Some of my Work</h3>
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Image"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Image"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Image"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Image"/>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-3 text-center">
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Image"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Image"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Image"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Image"/>
            </div>
          </div>
        </div>
        <footer className="container-fluid text-center">
          <p>Footer Text</p>
          <i className="fa fa-github" aria-hidden="true"></i>
        </footer>
      </main>
    );
  }
}

export default HomePage;
