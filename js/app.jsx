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
      <div className ="flex">
        <div className = "main-body">
          <div className = "header-disp">
            <header>{this.props.header}</header>
            <nav className = "main-menu">{this.props.menu}</nav>
          </div>
          <div className= "main-content">
            <main>{this.props.content}</main>
          </div>
          <footer>{this.props.footer}</footer>
        </div>
      </div>
      )
    }
  }

class App extends React.Component {

  render() {
    return (
      <Page
        header = {
            <p><a href ="#">Star Wars GoI</a></p>
        }
        content = {
            <div>
                <h1>Welcome to Star Wars Galaxy of Informations</h1>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
        }
        menu = {
            <ul>
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
