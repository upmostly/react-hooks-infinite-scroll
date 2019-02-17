import React, { Component } from 'react';
import List from './List';
import List2 from './List2';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>
              React Hooks Infinite Scroller
            </h1>
            <h3 className="text-muted">
              An <u>infinite scroll</u> component, built using React and custom React Hooks.
              <br />
              <small>Scroll down to see it in action</small>
            </h3>
          </div>
          <div className="col-12 text-center mt-3">
            <button type="button" className="btn btn-primary" onClick={() => window.open('https://upmostly.com/tutorials/', '_blank')}>
              View Full Tutorial at Upmostly.com
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6 justify-content-center my-5">
            <List />
          </div>
          <div className="col-6 justify-content-center my-5">
            <List2 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
