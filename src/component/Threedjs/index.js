import React, { Component } from 'react';
import ReactThreeFbxViewer from 'react-three-fbx-viewer';
 import "./style.css"
// let fbxUrl = require('./asd.fbx');
let fbxUrl = require('./asd.fbx');

export default class App extends Component {
  onLoad(e) {
    console.log(e);
  }
 
  onError(e) {
    console.log(e);
  }
  render () {
    let cameraPosition = {
      x:350,
      y:150,
      z:350
    }
    return (
      <div className='canves'>
        <ReactThreeFbxViewer  cameraPosition={cameraPosition} url={fbxUrl} onLoading={this.onLoad} onError={this.onError}/>
      </div>
    );
  }
}
 