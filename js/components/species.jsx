import React from 'react';
import Loading from './loading.jsx'

class Species extends React.Component {
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
    fetch(`https://swapi.co/api/species?page=${this.state.page}`).then(response =>{
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
          <h1>Species</h1>
          <input className = "search-input" style = {{marginBottom: "10px"}} ref ={inputDOM => this.input = inputDOM} type ="text"
            placeholder ="Search specie..."/>
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
              if (element.name.toUpperCase().indexOf(this.state.filterText.toUpperCase()) > -1 ||
                  element.language.toUpperCase().indexOf(this.state.filterText.toUpperCase()) > -1) {
              return (
                <div key = {element.name} className= "contentPlanet justify-content-center">
                  <h2>{element.name}</h2>
                  <span className = "directorProducer">
                    <span className = "titleColor">Designation:</span> {element.designation}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Skin colors:</span> {element.skin_colors}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Average height:</span> {element.average_height + " cm"}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Average lifespan:</span> {element.average_lifespan}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Skin colors:</span> {element.skin_colors}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Eye colors:</span> {element.eye_colors}</span>
                  <span className = "directorProducer">
                    <span className = "titleColor">Language:</span> {element.language}</span>
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

export default Species;
