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
	            // label="Simple"
	            defaultToggled={false}
	          />
	        </div>
	      </div>
	    </td>
	    <td className='tdStyle'>
	      <div className='type-of-users-toggle'>
	        <div>
	          <Toggle
	            // label="Simple"
	            defaultToggled={false}
	          />
	        </div>
	      </div>
	     </td>
	    <td className='tdStyle'>
	      <div className='type-of-users-toggle'>
	        <div>
	          <Toggle
	            // label="Simple"
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