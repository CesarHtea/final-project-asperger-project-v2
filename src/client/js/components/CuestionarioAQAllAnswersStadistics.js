import React, { Component } from 'react';
import request from 'superagent';

const API_URL = `http://localhost:3000`

class CuestionarioAQAllAnswersStadistics extends Component {

  constructor() {
    super();

    this.state = {
      allAnswersCuestionarioAQ: []
    };
  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/allAnswersCuestionarioAQ`)
      .then((data) => {
        this.setState({
          allAnswersCuestionarioAQ: data.body
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  // funcionX = () => {
  //   console.log('se activo la funcion X desde render')
  //   let answerACounter = 0
  //   let rawData = this.state.allAnswersCuestionarioAQ
  //   // console.log('----- consoleado desde funcionX -----')
  //   // console.log(rawData)
  //   // console.log(answerACounter)
  //   // console.log('----- rawData lenght desde funcion X')
  //   // console.log(rawData.length)

  //   for ( let i = 0 ; i < rawData.length ; i++ ) {
  //     console.log('pero ya me acorde')
  //     console.log(rawData[i].pregunta2)
  //   }

  // }

  render() {
    this.funcionX()
    return (
      <h1>See console</h1>
    )
  }

}



export default CuestionarioAQAllAnswersStadistics;