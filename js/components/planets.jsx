import React from 'react';
import Loading from './loading.jsx'

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
    this.input.value = "";
  }

  render() {
    return this.state.isData ? (
      <div className= "container">
        <div>
          <h1>Planets</h1>
          <input className = "search-input" style = {{marginBottom: "10px"}} ref ={inputDOM => this.input = inputDOM} type ="text"
            placeholder ="Search planet..."/>
            <button className = "search-button" onClick = {this.changeText}>Search</button>
        </div>
        <div className = "clearfix">
          {
            this.state.page > 1 && <button className = "button-style" onClick = {this.previousPage}>Previous</button>
          }
          <span style = {{borderRadius: 0, fontSize: "25px", padding: "0 5px", margin: "0 10px"}}>{this.state.page}</span>
          {
            this.state.page < 4 && <button className = "button-style" onClick = {this.nextPage}>Next</button>
          }
        </div>
          {
            this.state.data.map(element => {
              if (element.name.toUpperCase().indexOf(this.state.filterText.toUpperCase()) > -1) {
                return (
                  <div key = {element.name} className = "contentPlanet justify-content-center">
                    <h2>{element.name}</h2>
                    <span className = "planets">
                      <span className = "titleColor">Climate:</span> {element.climate}</span>

                    <span className = "planets">
                      <span className = "titleColor">Population:</span> {element.population}</span>

                    <span className = "planets">
                      <span className = "titleColor">Diameter:</span> {element.diameter + " km"}</span>

                    <span className = "planets">
                      <span className = "titleColor">Surface water:</span> {element.surface_water + " %"}</span>

                    <span className = "planets">
                      <span className = "titleColor">Rotation period:</span> {element.rotation_period + " h"}</span>

                    <span className = "planets">
                      <span className = "titleColor">Orbital period:</span> {element.orbital_period + " h"}</span>

                    <span className = "planets">
                      <span className = "titleColor">Terrain:</span> {element.terrain}</span>

                    <span className = "planets">
                      <span className = "titleColor">Gravity:</span> {element.gravity}</span>
                  </div>
                )
              }
            })
          }
          <div className = "clearfix">
            {
              this.state.page > 1 && <button className = "button-style" onClick = {this.previousPage}>Previous</button>
            }
            <span style = {{borderRadius: 0, fontSize: "25px", padding: "0 5px", margin: "0 10px"}}>{this.state.page}</span>
            {
              this.state.page < 7 && <button className = "button-style" onClick = {this.nextPage}>Next</button>
            }
          </div>
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default Planets;
