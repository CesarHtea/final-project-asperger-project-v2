import React, { Component } from 'react';
import request from 'superagent';

const PieChart = require("react-chartjs").Pie;

// const API_URL = `http://localhost:3000`
const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

class CuestionarioAQAllAnswersStadistics extends Component {

//   constructor() {
//     super();

//     this.state = {
//       allAnswersCuestionarioAQ: []
//     };
//   }

//   componentDidMount() {
//     request
//       .get(`${API_URL}/api/allAnswersCuestionarioAQ`)
//       .then((data) => {
//         this.setState({
//           allAnswersCuestionarioAQ: data.body
//         })
//       })
//       .catch(function(e){
//         console.log(e)
//       })
//   };

//   funcionX = () => {
//     console.log('se activo la funcion X desde render()')
    
//     let rawData = this.state.allAnswersCuestionarioAQ

//     let pregunta1ACounter = 0;
//     let pregunta1BCounter = 0;
//     let pregunta1CCounter = 0;
//     let pregunta1DCounter = 0;
    
//     for ( let i = 0 ; i < rawData.length ; i++ ) {
//       if ( rawData[i].pregunta1 === 1 ) { pregunta1ACounter += 1 }
//       else if ( rawData[i].pregunta1 === 2 ) { pregunta1BCounter +=1 }
//       else if ( rawData[i].pregunta1 === 3 ) { pregunta1CCounter +=1 }
//       else if ( rawData[i].pregunta1 === 4 ) { pregunta1DCounter +=1 }
//     }
//     console.log('pregunta1ACounter: '+ pregunta1ACounter)
//     console.log('pregunta1BCounter: '+ pregunta1BCounter)
//     console.log('pregunta1CCounter: '+ pregunta1CCounter)
//     console.log('pregunta1DCounter: '+ pregunta1DCounter)
//   }

  // render() {
  //   this.funcionX()
  //   return (
  //     <div>
  //       <h1>See console</h1>
  //       <PieChart 
  //         data={
  //           datasets: [{
  //             data: [10, 20, 30]
  //           }],
  //           labels: [
  //              'Red',
  //              'Yellow',
  //              'Blue'
  //           ]
  //         }
  //       />
  //     </div>
  //   )
  // }

}



export default CuestionarioAQAllAnswersStadistics;