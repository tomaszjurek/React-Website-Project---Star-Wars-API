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

  componentWillMount() {
    fetch(`https://swapi.co/api/films`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      console.log(data);
      this.setState({
        isData: true,
        data: data
      })
    })
  }

  render() {
    return this.state.isData ?(
      <div>

      </div>
    ) : (
      <img src = "https://i.imgur.com/qvbAYu8.gif"></img>
    );
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
