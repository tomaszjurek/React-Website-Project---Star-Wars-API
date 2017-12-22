import React from 'react';
import Loading from './loading.jsx'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      filterText: "",
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
      let sortedData = data.results
      sortedData.sort(function(a, b) {
        return a.episode_id - b.episode_id;
      })
      console.log(sortedData);
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
          <h1>Movies</h1>
          <input className = "search-input" style = {{marginBottom: "10px"}} ref ={inputDOM => this.input = inputDOM} type ="text"
              placeholder ="Search title..."/>
              <button className = "search-button" onClick = {this.changeText}>Search</button>
        </div>
          {
            this.state.data.map(element => {
              if (element.title.toUpperCase().indexOf(this.state.filterText.toUpperCase()) > -1) {
              return (
                <div key = {element.episode_id} className= "contentItem justify-content-center">
                  <h2>Episode {element.episode_id} {element.title}</h2>
                  <h3 className = "directorProducer">
                    <span className = "titleColor">Director:</span> {element.director}</h3>
                  <h3 className = "directorProducer">
                    <span className = "titleColor">Producer:</span> {element.producer}</h3>
                  <h3 className = "directorProducer">
                    <span className = "titleColor">Release Date:</span> {element.release_date}</h3>
                  <p className = "opening">{element.opening_crawl}</p>
                </div>
              )
            }
            })
          }
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default Movies;
