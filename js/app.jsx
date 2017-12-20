import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from "react-router";
import Template from './components/template.jsx'
import Main from './components/main.jsx'
import Movies from './components/movies.jsx'
import Planets from './components/planets.jsx'
import People from './components/people.jsx'
import Species from './components/species.jsx'
import Starships from './components/starships.jsx'
import Vehicles from './components/vehicles.jsx'
import Quiz from './components/quiz.jsx'
import Error from './components/error.jsx'

class App extends React.Component {
  render() {
    return (
      <Router history = {hashHistory}>
        <Route path = "/" component = {Template}>
          <IndexRoute component = {Main}/>
          <Route path = "movies" component = {Movies}></Route>
          <Route path = "planets" component = {Planets}></Route>
          <Route path = "people" component = {People}></Route>
          <Route path = "species" component = {Species}></Route>
          <Route path = "starships" component = {Starships}></Route>
          <Route path = "vehicles" component = {Vehicles}></Route>
          <Route path = "quiz" component = {Quiz}></Route>
        </Route>
        <Route path = "*" component = {Error}></Route>
      </Router>
    );
  }

}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
