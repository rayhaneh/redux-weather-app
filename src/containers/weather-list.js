import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temp = cityData.list.map( (l) => (l.main.temp));
    const pres = cityData.list.map( (l) => (l.main.pressure));
    const humi = cityData.list.map( (l) => (l.main.humidity));
    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temp} color='red' units='K' /></td>
        <td><Chart data={pres} color='blue' units='hPa' /></td>
        <td><Chart data={humi} color='orange' units='%' /></td>
      </tr>
    )
  }
  
  render() {
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>        
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);