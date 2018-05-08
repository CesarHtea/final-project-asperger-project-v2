
import React, { Component } from 'react';
import request from 'superagent';

import CuestionarioAQAnswerIndividual from './CuestionarioAQAnswerIndividual'

const API_URL = `http://localhost:3000`

class AllAnswersCuestionarioAQ extends Component {
  
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

  // deleteElement = elementId => {
    
  //   // console.log(elementId)

  //   request
  //     .delete(`${API_URL}/api/talentos/${elementId}`)
  //     .then(() => {
  //       console.log('registro eliminado')
  //     });

  //   request
  //     .get(`${API_URL}/api/talentos`)
  //     .then((data) => {
  //         this.setState({
  //           talentos: data.body 
  //         })
  //     })

  //     .catch(function(e){
  //       console.log(e)
  //     })
  // }

  render() {
    // console.log(this.state.allAnswersCuestionarioAQ)

   const tdStyle = {
     textAlign: 'center'
   }

    return (
      <div className='all-answers-cuestionario-AQ-container'>
        
        <h1>All answers to AQ Questionnaire</h1>

        <table className='table'>
          <thead>
            <tr>
              <td style={tdStyle}>Id Answer</td>
              <td style={tdStyle}>Time Stamp</td>
              <td style={tdStyle}>Pregunta 1</td>
              <td style={tdStyle}>Pregunta 2</td>
              <td style={tdStyle}>Resultado</td>
            </tr>
          </thead>
          <tbody>
              {this.state.allAnswersCuestionarioAQ.slice(0).reverse().map((answer, i) => {
                return <CuestionarioAQAnswerIndividual key={i} info={answer} />
              })};
          </tbody>
        </table>

      </div>
    )
  }

}

export default AllAnswersCuestionarioAQ;