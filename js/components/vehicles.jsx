import React from 'react';
import {Link} from 'react-router';

class Vehicles extends React.Component {
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
    fetch(`https://swapi.co/api/vehicles?page=${this.state.page}`).then(response =>{
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
        <h1>Vehicles</h1>
        <input style = {{marginBottom: "10px"}} ref ={inputDOM => this.input = inputDOM} type ="text"
            placeholder ="Search vehicle..." onChange = {this.changeText}/>
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
                    <span className = "titleColor">Vehicle class:</span> {element.vehicle_class}</span>

                </div>
              )
              }
            })
          }
          <div>
            {
              this.state.page > 1 && <button onClick = {this.previousPage}>Previous</button>
            }
            {
              this.state.page < 4 && <button onClick = {this.nextPage}>Next</button>
            }
          </div>
      </div>
    ) : (
      <div className= "container">
        <h1>Vehicles</h1>
        <div className= "contentItem justify-content-center">
          <img className = "img-fluid" src = "https://i.imgur.com/qvbAYu8.gif"></img>
        </div>
      </div>

    );
  }
}

export default Vehicles;
