import React from 'react';
import {IndexLink} from 'react-router';

class Template extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <IndexLink to ="/" className="nav-link" activeClassName="active">Star Wars GoI</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/movies" className="nav-link" activeClassName="active">Movies</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/planets" className="nav-link" activeClassName="active">Planets</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/people" className="nav-link" activeClassName="active">People</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/species" className="nav-link" activeClassName="active">Species</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/starships" className="nav-link" activeClassName="active">Starships</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/vehicles" className="nav-link" activeClassName="active">Vehicles</IndexLink></li>
            <li className="nav-item">
              <IndexLink to = "/quiz" className="nav-link" activeClassName="active">Quiz</IndexLink></li>
          </ul>
        </header>
      <hr/>
        <div className="row content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Template;
