import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CuestionarioAQAnswerIndividual extends Component {

  render() {

  	const { info } = this.props

  	return (
  	  <tr>
        <td className='tdStyle'>{info.id}</td>
        <td className='tdStyle'>{info.createdAt}</td>
        <td className='tdStyle'>{info.userId}</td>
        <td className='tdStyle'>{info.sumaTotal}</td>
        <td>{info.interpretacionAQ}</td>

        
      </tr>
  	)
  }
}

export default CuestionarioAQAnswerIndividual;