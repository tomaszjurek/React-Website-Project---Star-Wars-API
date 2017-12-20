import React from 'react';
import {Link} from 'react-router';

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      data: {}
    };
  }

  componentWillMount() {
    fetch(`https://swapi.co/api/planets`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      console.log(data.results);
      this.setState({
        isData: true,
        data: data.results
      })
    })
  }

  render() {
    return this.state.isData ? (
      <div className= "container">
        <h1>Planets</h1>
          {
            this.state.data.map(element => {
              return (
                <div key = {element.episode_id} className= "contentItem justify-content-center">
                  <h2>Episode {element.episode_id} {element.title}</h2>
                  <h3 className = "directorProducer">Director: {element.director}</h3>
                  <h3 className = "directorProducer">Producer: {element.producer}</h3>
                  <h3 className = "directorProducer">Release Date: {element.release_date}</h3>
                  <p className = "opening">{element.opening_crawl}</p>


                </div>
              )
            })
          }
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
