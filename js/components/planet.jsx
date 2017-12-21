import React from 'react';
import {Link} from 'react-router';

class Planet extends React.Component {
  render() {
    return (
      <div>
        <span className = "planets">Climate: {element.climate}</span>
        <span className = "planets">Population: {element.population}</span>
        <span className = "planets">Diameter: {element.diameter}</span>
        <span className = "planets">Surface water: {element.surface_water + "%"}</span>
      </div>
    )
  }
}

export default Planet;
