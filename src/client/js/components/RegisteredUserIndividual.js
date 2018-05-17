import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Toggle from 'material-ui/Toggle';


class RegisteredUserIndividual extends Component {

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
	            disabled={this.props.disabled}
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
	            disabled={this.props.disabled}
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
	            disabled={this.props.disabled}
	            defaultToggled={this.props.info.typeOfUser[0].px}
	            onToggle={ (e) => { this.props.cambiarPermisoDeUsuarioAPx(info) } }
	          />
	        </div>
	      </div>
	    </td>
      </tr>
  	)
  }
}

export default withRouter(RegisteredUserIndividual);