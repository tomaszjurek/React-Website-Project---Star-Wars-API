import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Star Wars Galaxy of Informations</h1>
        <p>Here you'll find many informations about Star Wars franchise and a small quiz. These are the informations You're looking for.</p>
        <img className = "rounded mx-auto d-block rounded my-auto jar-jar align-self-center" src = "http://nerdist.com/wp-content/uploads/2016/08/Jar_jar.jpg"></img>
      </div>
    )
  }
}

export default Main;
