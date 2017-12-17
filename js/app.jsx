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
      <div className = "main-page">
        <p>Stronka</p>
      </div>
    )
  }
}


class App extends React.Component {

  render() {
    return (
      <Page/>
    );
  }

}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
