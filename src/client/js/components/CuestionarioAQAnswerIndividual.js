import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CuestionarioAQAnswerIndividual extends Component {

  render() {

   const tdStyle = {
     textAlign: 'center'
   }

  	const { info } = this.props

  	return (
  	  <tr>
        <td style={tdStyle}>{info.id}</td>
        <td style={tdStyle}>{info.createdAt}</td>
        <td style={tdStyle}>{info.pregunta1}</td>
        <td style={tdStyle}>{info.pregunta2}</td>
        <td style={tdStyle}>{info.sumaTotal}</td>
      </tr>
  	)
  }
}

export default CuestionarioAQAnswerIndividual;