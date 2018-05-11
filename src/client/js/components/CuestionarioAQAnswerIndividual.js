import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CuestionarioAQAnswerIndividual extends Component {

  render() {

  	const { info } = this.props

    // Conviertiendo StampoTime en fecha
    const stringTimeStamp = info.createdAt
    const arrayCaracteresDeLaFecha = stringTimeStamp.split('').slice(0,10)
    const fechaDia = arrayCaracteresDeLaFecha[8] + arrayCaracteresDeLaFecha[9]
    const fechaMes = arrayCaracteresDeLaFecha[5] + arrayCaracteresDeLaFecha[6]
    const fechaAnio = arrayCaracteresDeLaFecha[0] + arrayCaracteresDeLaFecha[1] + arrayCaracteresDeLaFecha[2] + arrayCaracteresDeLaFecha[3]
    const nuevaFecha = fechaDia + '/' + fechaMes + '/' + fechaAnio
    //------
    
  	return (
  	  <tr>
        <td className='tdStyle'>{nuevaFecha}</td>
        <td className='tdStyle'>{info.userId}</td>
        <td className='tdStyle'>{info.sumaTotal}</td>
        <td>{info.interpretacionAQ}</td>
      </tr>
  	)
  }
}

export default CuestionarioAQAnswerIndividual;