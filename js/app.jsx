import React from 'react';
import ReactDOM from 'react-dom';


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      data: {}
    };
  }

  render() {
    return (
      <div className = "main-body">
        <header>{this.props.header}</header>
        <nav className = "main-menu">{this.props.menu}</nav>
        <div>
          <main>{this.props.content}</main>
        </div>
        <footer>{this.props.footer}</footer>
      </div>
    )
  }
}


class App extends React.Component {

  render() {
    return (
      <Page
        header = {
            <h1>Star Wars Galaxy of Information</h1>
        }
        content = {
            <div>
                <h1>Witaj na mojej stronie</h1>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
        }
        menu = {
            <ul>
                <li><a href ="#">Main</a></li>
                <li><a href ="#">Movies</a></li>
                <li><a href ="#">Planets</a></li>
                <li><a href ="#">People</a></li>
                <li><a href ="#">Species</a></li>
                <li><a href ="#">Starships</a></li>
                <li><a href ="#">Vehicles</a></li>
            </ul>
        }
        footer = {
            <p>&copy; 2017 Tomasz O</p>
        }/>
    );
  }

}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
