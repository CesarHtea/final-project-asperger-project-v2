import React, { Component } from 'react'
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
	            defaultToggled={false}
	            onToggle={ (e) => { this.props.fn(info) } }
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
	            defaultToggled={false}
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
	            defaultToggled={false}
	          />
	        </div>
	      </div>
	    </td>
      </tr>
  	)
  }
}

export default RegisteredUserIndividual;