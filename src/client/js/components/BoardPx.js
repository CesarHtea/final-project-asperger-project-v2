import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class BoardPx extends Component {

  render() {
    return (
      <div>
        <h1>Board del Paciente</h1>
        <div className='board-px-papers-container'>

		    <Paper className='board-px-material-ui-paper' zDepth={5} circle={true} >
		      <div className='board-px--mini-paper-tittle'>
		        <p>un paper</p>
		        <p>titulo</p>
		      </div>
		    </Paper>

		    <Paper className='board-px-material-ui-paper' zDepth={5} circle={true} >
		      <div className='board-px--mini-paper-tittle'>
		        otro paper
		      </div>
		    </Paper>

	    </div>
      </div>
    )
  }
}

export default BoardPx;