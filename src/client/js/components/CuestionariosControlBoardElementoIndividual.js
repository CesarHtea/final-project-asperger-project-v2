import React, { Component } from 'react'

import Toggle from 'material-ui/Toggle';

class CuestionariosControlBoardElementoIndividual extends Component {

  render() {

  	const { info } = this.props

 	return (

  	  <tr>
	    <td>{ info.email }</td>
	    <td className='tdStyle'>
	      <div className='type-of-users-toggle'>
	        <div>
	          <Toggle
	            // admin
	            defaultToggled={this.props.info.typeOfUser[0].admin}
	            onToggle={ (e) => { this.props.cambiarPermisoDeUsuarioAAdmin(info) } }
	          />
	        </div>
	      </div>
	    </td>
	    <td className='tdStyle'>
	      <div className='type-of-users-toggle'>
	        <div>
	          <Toggle
	            // psicologo
	            defaultToggled={this.props.info.typeOfUser[0].psicologo}
	            onToggle={ (e) => { this.props.cambiarPermisoDeUsuarioAPsicologo(info) } }
	          />
	        </div>
	      </div>
	     </td>
	    <td className='tdStyle'>
	      <div className='type-of-users-toggle'>
	        <div>
	          <Toggle
	            // px
	            defaultToggled={this.props.info.typeOfUser[0].px}
	            onToggle={ (e) => { this.props.cambiarPermisoDeUsuarioAPx(info) } }
	          />
	        </div>
	      </div>
	    </td>
	    <td>
	      toogle
	    </td>
      </tr>
  	)
  }
}

export default CuestionariosControlBoardElementoIndividual;