import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import { BusLocation, BusRefresh } from './components/bus';
import { vehicleService } from './lib/busService';

class App extends Component {
 state = {
    curTime: '',
    buses: []
  }

  componentDidMount() {
    vehicleService().then(Siri => this.setState({curTime: Siri[0], buses: Siri[1]}))
  }

  // handleSubmit = (evt) => {
  //   evt.preventDefault()
  // }

  handleRefresh = (evt) => {
    evt.preventDefault()
    vehicleService().then(Siri => this.setState({curTime: Siri[0], buses: Siri[1]}))
  }

  render() {
    return (
      <div className='App'>
        <Map className='Map' animate={true} center={[40.756410, -73.845301]} zoom={12}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <BusLocation time={this.state.curTime} buses={this.state.buses} />
        </Map>
        {/* <BusForm handleSubmit={this.handleSubmit} /> */}
        <BusRefresh handleRefresh={this.handleRefresh}/>
      </div>
    );
  }
}

export default App;
