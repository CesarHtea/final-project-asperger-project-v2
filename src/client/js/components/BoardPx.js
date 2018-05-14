import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';

class BoardPx extends Component {

  render() {
    return (
      <div>
        <h1></h1>
        <div className='board-px-papers-container'>

          <Link to='/cuestionarioAQ' className='no-decoration-text'>
	          <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>AQ</h1>
			    </div>
			      <div className='board-px-mini-paper-subtittle-container'>
			        <h3 className='board-px-mini-paper-subtittle'>Coeficiente del <br />espectro autista</h3>
			      </div>
			  </Paper>
          </Link>
          
	          <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>EQ</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle'>Coeficiente <br />de empatía</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>SRS</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle'>Escala de <br />sensibilidad social</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>SQ</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle'>Coeficiente de<br />sistematización</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>PDQ-4+</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle'>Cuestionario <br />de personalidad</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>BAI</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle'>Inventario de <br />ansiedad de Beck</h3>
			  </Paper>

	          <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle'>BDI-II</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle'>Inventario de <br />depresión de Beck</h3>
			  </Paper>



	    </div>
      </div>
    )
  }
}

export default BoardPx;