import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className= "container">
        <h1>Movies</h1>
        <div className= "contentItem justify-content-center">
          <img className = "img-fluid" src = "https://i.imgur.com/qvbAYu8.gif"></img>
        </div>
      </div>
    )
  }
}

export default Loading;
