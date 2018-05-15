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
			        <h1 className='board-px-mini-paper-tittle '>AQ</h1>
			    </div>
			      <div className='board-px-mini-paper-subtittle-container'>
			        <h3 className='board-px-mini-paper-subtittle'>Coeficiente del <br />espectro autista</h3>
			      </div>
			  </Paper>
          </Link>
          
            <div className='board-px-card-not-available'>
	          <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle board-px-card-not-available'>EQ</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle board-px-card-not-available'>Coeficiente <br />de empatía</h3>
			  </Paper>
			</div>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle board-px-card-not-available'>SRS</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle board-px-card-not-available'>Escala de <br />sensibilidad social</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle board-px-card-not-available'>SQ</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle board-px-card-not-available'>Coeficiente de<br />sistematización</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle board-px-card-not-available'>PDQ-4+</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle board-px-card-not-available'>Cuestionario <br />de personalidad</h3>
			  </Paper>

			  <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle board-px-card-not-available'>BAI</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle board-px-card-not-available'>Inventario de <br />ansiedad de Beck</h3>
			  </Paper>

	          <Paper className='board-px-material-ui-paper-card'>
			    <div className='board-px-mini-paper-tittle-container' >
			        <h1 className='board-px-mini-paper-tittle board-px-card-not-available'>BDI-II</h1>
			    </div>
			    <h3 className='board-px-mini-paper-subtittle board-px-card-not-available'>Inventario de <br />depresión de Beck</h3>
			  </Paper>



	    </div>
      </div>
    )
  }
}

export default BoardPx;