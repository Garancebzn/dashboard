import React, { Component } from 'react';
//import ResponsiveContainer from "react-responsive-widget";

import './App.css';

import SimpleTimeseries from './components/SimpleTimeseries';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-6 col-md-3">
           <div>TOP 5</div>
    <SimpleTimeseries/>

          </div>
          <div className="col-xs-6 col-md-3">
            <div>Graph like sur 1 titre</div>
          </div>
          <div className="col-xs-6 col-md-3">
           <div>Genres les + écoutés</div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div>Horloge</div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-md-3">
           <div>Le titre le + écouté avec la photo</div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div>Graph artistes les + follow</div>
          </div>
        </div>

      </div>
     
    );
  }
}

export default App;
