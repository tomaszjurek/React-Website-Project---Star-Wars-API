import React from 'react';
import Loading from './loading.jsx'

class Starships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      filterText: "",
      page: 1,
      data: {}
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
    fetch(`https://swapi.co/api/starships?page=${this.state.page}`).then(response =>{
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
          <h1>Starships</h1>
          <input className = "search-input" style = {{marginBottom: "10px"}} ref ={inputDOM => this.input = inputDOM} type ="text"
            placeholder ="Search starship..."/>
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
                <div key = {element.name} className= "contentItem justify-content-center">
                  <h2>{element.name}</h2>
                  <span className = "directorProducer">
                    <span className = "titleColor">Model:</span> {element.model}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Manufacturer:</span> {element.manufacturer}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Length:</span> {element.length + " m"}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Max speed:</span> {element.max_atmosphering_speed + " km/h"}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Crew:</span> {element.crew}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Passengers:</span> {element.passengers}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Cargo capacity:</span> {element.cargo_capacity}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Cost:</span> {element.cost_in_credits+ " credits"}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Starship class:</span> {element.starship_class}</span>

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
              this.state.page < 4 && <button className = "button-style" onClick = {this.nextPage}>Next</button>
            }
          </div>
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default Starships;
