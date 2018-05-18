import React, { Component } from 'react';
import request from 'superagent';

import CuestionarioAQAnswerIndividual from './CuestionarioAQAnswerIndividual'

import Paper from 'material-ui/Paper';

// const API_URL = `http://localhost:3000`
const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

class CuestionarioAQAllAnswers extends Component {
  
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
    console.log(this.state.allAnswersCuestionarioAQ)

    return (
      <div className='all-answers-cuestionario-AQ-container'>
        
        <h1 className='all-answers-cuestionario-AQ-title'>Coeficiente del Espectro (Respuesta de todos los Px) </h1>

        <Paper className='all-answers-cuestionario-AQ-paper-material-ui' zDepth={5} >

          <table className='table'>
            <thead>
              <tr>
                <td className='tdStyle'>Fecha</td>
                <td className='tdStyle'>User Id (Px)</td>
                <td className='tdStyle'>Cociente de autismo</td>
                <td>Interpretacion</td>
                
              </tr>
            </thead>
            <tbody>
                {this.state.allAnswersCuestionarioAQ.slice(0).reverse().map((answer, i) => {
                  return <CuestionarioAQAnswerIndividual key={i} info={answer} />
                })};
            </tbody>
          </table>

        </Paper>

      </div>
    )
  }

}

export default CuestionarioAQAllAnswers;