import React from 'react';
import {Link} from 'react-router';
import quiz from './questions';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      an1: "",
      an2: "",
      an3: "",
      an4: "",
      an5: "",
      an6: "",
      an7: "",
      an8: "",
      an9: "",
      an10: "",
      displayWarning: "none",
      isClicked: false,
      displayText: "",
      displayColor: ""
    };
  }

  validation = (event) => {
    event.preventDefault()
    if (this.state.an1 === "" ||
        this.state.an2 === "" ||
        this.state.an3 === "" ||
        this.state.an4 === "" ||
        this.state.an5 === "" ||
        this.state.an6 === "" ||
        this.state.an7 === "" ||
        this.state.an8 === "" ||
        this.state.an9 === "" ||
        this.state.an10 === "")
        {
          this.setState({
            displayWarning: "inline-block",
            displayText: "Not all answers given was!",
            displayColor: "red",
            isClicked: true
          })
        } else {
        let points = 0;
        quiz.forEach( (element, index) => {
          if (element.correctAnswer === this.state["an"+(index+1)]) {
            points++
          }
        })
        this.setState({
          displayWarning: "inline-block",
          displayText: points+"/" + 10 + " answers good are!",
          displayColor: "green",
          isClicked: true
        })
      }

  }


  answersPush(event, element) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className= "container">
        <h1>Quiz</h1>
        {
          quiz.map(element => {
            return (
              <div key = {element.id} className= "question justify-content-center">
                <p>{element.id}. {element.question}</p>

                <label>
                  <input onChange = {(event) => this.answersPush(event,element)}
                  type = "radio"
                  name = {"an" + element.id}
                  value = {element.id+"a"}/>   {element.answers.a}
                </label>
                <br/>

                <label>
                  <input onChange = {(event) => this.answersPush(event,element)}
                    type = "radio"
                    name = {"an" + element.id}
                    value = {element.id+"b"}/>   {element.answers.b}
                  </label>
                <br/>

                <label>
                  <input onChange = {(event) => this.answersPush(event,element)}
                    type = "radio"
                    name = {"an" + element.id}
                    value = {element.id +"c"}/>   {element.answers.c}
                  </label>
              </div>
            )
          })
        }
        <div>
        <button onClick = {this.validation}>I'm finished</button><span className = "lightsaber" style = {{backgroundColor: this.state.displayColor, display: this.state.displayWarning}}>{this.state.displayText}</span>
        </div>
      </div>
    )
  }
}

export default Quiz;
