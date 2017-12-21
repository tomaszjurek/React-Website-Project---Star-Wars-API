import React from 'react';
import {Link} from 'react-router';

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
  }

  changeText = () => {
    this.setState ({
      filterText: this.input.value
    }, () => {
        this.props.changeTextValue(this.state.filterText);})
  }

  render() {
    return (
      <div>
        <span className = "planets">
          <span className = "titleColor">Climate:</span> {this.props.element.climate}</span>
        <span className = "planets">
          <span className = "titleColor">Population:</span> {this.props.element.population}</span>
        <span className = "planets">
          <span className = "titleColor">Diameter:</span> {this.props.element.diameter}</span>
        <span className = "planets">
          <span className = "titleColor">Surface water:</span> {this.props.element.surface_water + "%"}</span>
      </div>
    )
  }
}

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      filterText: "",
      data: {},
      page: 1
    };
  }

  previousPage = () => {
    if (this.state.page >= 1) {
      this.setState({
        page: this.state.page - 1
      }, () => {
        this.componentWillMount()
      })
    }
  }


  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.componentWillMount()
    })
  }

  componentWillMount() {
    fetch(`https://swapi.co/api/planets?page=${this.state.page}`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      let sortedData = data.results
      sortedData.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      })
      this.setState({
        isData: true,
        data: sortedData
      })
    })
  }

  changeText = () => {
    this.setState({
      filterText: this.input.value
    })
  }

  render() {
    return this.state.isData ? (
      <div className= "container">
        <div>
          <h1>Planets</h1>
          <input style = {{marginBottom: "10px"}} ref ={inputDOM => this.input = inputDOM} type ="text"
            placeholder ="Search planet..." onChange = {this.changeText}/>
        </div>
        <div className = "clearfix">
          {
            this.state.page > 1 && <button onClick = {this.previousPage}>Previous</button>
          }
          {
            this.state.page < 4 && <button onClick = {this.nextPage}>Next</button>
          }
        </div>
          {
            this.state.data.map(element => {
              if (element.name.toUpperCase().indexOf(this.state.filterText.toUpperCase()) > -1) {
                return (
                  <div key = {element.name} className = "contentPlanet justify-content-center">
                    <h2>{element.name}</h2>
                    <Planet element = {element}/>
                  </div>
                )
              }
            })
          }
          <div className = "clearfix">
            {
              this.state.page > 1 && <button onClick = {this.previousPage}>Previous</button>
            }
            {
              this.state.page < 7 && <button onClick = {this.nextPage}>Next</button>
            }
          </div>
      </div>
    ) : (
      <div className= "container">
        <h1>Planets</h1>
        <div className= "contentItem justify-content-center">
          <img className = "img-fluid" src = "https://i.imgur.com/qvbAYu8.gif"></img>
        </div>
      </div>

    );
  }
}

export default Planets;
