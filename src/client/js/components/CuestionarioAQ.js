import React, { Component } from 'react';
import request from 'superagent'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'

class CuestionarioAQ extends Component {

  constructor() {
      super()

      this.state = {
        userId: 0,
      	pregunta1: { pregunta1opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta2: { pregunta2opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta3: { pregunta3opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta4: { pregunta4opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta5: { pregunta5opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta6: { pregunta6opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta7: { pregunta7opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta8: { pregunta8opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta9: { pregunta9opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta10: { pregunta10opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta11: { pregunta11opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta12: { pregunta12opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta13: { pregunta13opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta14: { pregunta14opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta15: { pregunta15opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta16: { pregunta16opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta17: { pregunta17opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta18: { pregunta18opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta19: { pregunta19opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta20: { pregunta20opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta21: { pregunta21opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta22: { pregunta22opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta23: { pregunta23opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta24: { pregunta24opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta25: { pregunta25opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta26: { pregunta26opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta27: { pregunta27opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta28: { pregunta28opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta29: { pregunta29opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta30: { pregunta30opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta31: { pregunta31opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta32: { pregunta32opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta33: { pregunta33opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta34: { pregunta34opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta35: { pregunta35opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta36: { pregunta36opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta37: { pregunta37opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta38: { pregunta38opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta39: { pregunta39opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta40: { pregunta40opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta41: { pregunta41opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta42: { pregunta42opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta43: { pregunta43opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta44: { pregunta44opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta45: { pregunta45opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta46: { pregunta46opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta47: { pregunta47opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta48: { pregunta48opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta49: { pregunta49opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        pregunta50: { pregunta50opcionElegida: 0, valor: 0, botonASeleccionado: '', botonBSeleccionado: '', botonCSeleccionado: '', botonDSeleccionado: '' },
        sumaTotal: 0
      }  
  }

  componentDidMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        this.setState({
          userId: data.body.id
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  };

  pregunta1botonA = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta1botonB = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta1botonC = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta1botonD = () => { this.setState({ pregunta1: { pregunta1opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta2botonA = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta2botonB = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta2botonC = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta2botonD = () => { this.setState({ pregunta2: { pregunta2opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta3botonA = () => { this.setState({ pregunta3: { pregunta3opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta3botonB = () => { this.setState({ pregunta3: { pregunta3opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta3botonC = () => { this.setState({ pregunta3: { pregunta3opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta3botonD = () => { this.setState({ pregunta3: { pregunta3opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta4botonA = () => { this.setState({ pregunta4: { pregunta4opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta4botonB = () => { this.setState({ pregunta4: { pregunta4opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta4botonC = () => { this.setState({ pregunta4: { pregunta4opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta4botonD = () => { this.setState({ pregunta4: { pregunta4opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta5botonA = () => { this.setState({ pregunta5: { pregunta5opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta5botonB = () => { this.setState({ pregunta5: { pregunta5opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta5botonC = () => { this.setState({ pregunta5: { pregunta5opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta5botonD = () => { this.setState({ pregunta5: { pregunta5opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta6botonA = () => { this.setState({ pregunta6: { pregunta6opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta6botonB = () => { this.setState({ pregunta6: { pregunta6opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta6botonC = () => { this.setState({ pregunta6: { pregunta6opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta6botonD = () => { this.setState({ pregunta6: { pregunta6opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta7botonA = () => { this.setState({ pregunta7: { pregunta7opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta7botonB = () => { this.setState({ pregunta7: { pregunta7opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta7botonC = () => { this.setState({ pregunta7: { pregunta7opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta7botonD = () => { this.setState({ pregunta7: { pregunta7opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta8botonA = () => { this.setState({ pregunta8: { pregunta8opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta8botonB = () => { this.setState({ pregunta8: { pregunta8opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta8botonC = () => { this.setState({ pregunta8: { pregunta8opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta8botonD = () => { this.setState({ pregunta8: { pregunta8opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta9botonA = () => { this.setState({ pregunta9: { pregunta9opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta9botonB = () => { this.setState({ pregunta9: { pregunta9opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta9botonC = () => { this.setState({ pregunta9: { pregunta9opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta9botonD = () => { this.setState({ pregunta9: { pregunta9opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta10botonA = () => { this.setState({ pregunta10: { pregunta10opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta10botonB = () => { this.setState({ pregunta10: { pregunta10opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta10botonC = () => { this.setState({ pregunta10: { pregunta10opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta10botonD = () => { this.setState({ pregunta10: { pregunta10opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta11botonA = () => { this.setState({ pregunta11: { pregunta11opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta11botonB = () => { this.setState({ pregunta11: { pregunta11opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta11botonC = () => { this.setState({ pregunta11: { pregunta11opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta11botonD = () => { this.setState({ pregunta11: { pregunta11opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta12botonA = () => { this.setState({ pregunta12: { pregunta12opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta12botonB = () => { this.setState({ pregunta12: { pregunta12opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta12botonC = () => { this.setState({ pregunta12: { pregunta12opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta12botonD = () => { this.setState({ pregunta12: { pregunta12opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta13botonA = () => { this.setState({ pregunta13: { pregunta13opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta13botonB = () => { this.setState({ pregunta13: { pregunta13opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta13botonC = () => { this.setState({ pregunta13: { pregunta13opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta13botonD = () => { this.setState({ pregunta13: { pregunta13opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta14botonA = () => { this.setState({ pregunta14: { pregunta14opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta14botonB = () => { this.setState({ pregunta14: { pregunta14opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta14botonC = () => { this.setState({ pregunta14: { pregunta14opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta14botonD = () => { this.setState({ pregunta14: { pregunta14opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta15botonA = () => { this.setState({ pregunta15: { pregunta15opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta15botonB = () => { this.setState({ pregunta15: { pregunta15opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta15botonC = () => { this.setState({ pregunta15: { pregunta15opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta15botonD = () => { this.setState({ pregunta15: { pregunta15opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta16botonA = () => { this.setState({ pregunta16: { pregunta16opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta16botonB = () => { this.setState({ pregunta16: { pregunta16opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta16botonC = () => { this.setState({ pregunta16: { pregunta16opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta16botonD = () => { this.setState({ pregunta16: { pregunta16opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta17botonA = () => { this.setState({ pregunta17: { pregunta17opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta17botonB = () => { this.setState({ pregunta17: { pregunta17opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta17botonC = () => { this.setState({ pregunta17: { pregunta17opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta17botonD = () => { this.setState({ pregunta17: { pregunta17opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta18botonA = () => { this.setState({ pregunta18: { pregunta18opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta18botonB = () => { this.setState({ pregunta18: { pregunta18opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta18botonC = () => { this.setState({ pregunta18: { pregunta18opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta18botonD = () => { this.setState({ pregunta18: { pregunta18opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta19botonA = () => { this.setState({ pregunta19: { pregunta19opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta19botonB = () => { this.setState({ pregunta19: { pregunta19opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta19botonC = () => { this.setState({ pregunta19: { pregunta19opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta19botonD = () => { this.setState({ pregunta19: { pregunta19opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta20botonA = () => { this.setState({ pregunta20: { pregunta20opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta20botonB = () => { this.setState({ pregunta20: { pregunta20opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta20botonC = () => { this.setState({ pregunta20: { pregunta20opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta20botonD = () => { this.setState({ pregunta20: { pregunta20opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta21botonA = () => { this.setState({ pregunta21: { pregunta21opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta21botonB = () => { this.setState({ pregunta21: { pregunta21opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta21botonC = () => { this.setState({ pregunta21: { pregunta21opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta21botonD = () => { this.setState({ pregunta21: { pregunta21opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta22botonA = () => { this.setState({ pregunta22: { pregunta22opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta22botonB = () => { this.setState({ pregunta22: { pregunta22opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta22botonC = () => { this.setState({ pregunta22: { pregunta22opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta22botonD = () => { this.setState({ pregunta22: { pregunta22opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta23botonA = () => { this.setState({ pregunta23: { pregunta23opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta23botonB = () => { this.setState({ pregunta23: { pregunta23opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta23botonC = () => { this.setState({ pregunta23: { pregunta23opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta23botonD = () => { this.setState({ pregunta23: { pregunta23opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta24botonA = () => { this.setState({ pregunta24: { pregunta24opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta24botonB = () => { this.setState({ pregunta24: { pregunta24opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta24botonC = () => { this.setState({ pregunta24: { pregunta24opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta24botonD = () => { this.setState({ pregunta24: { pregunta24opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta25botonA = () => { this.setState({ pregunta25: { pregunta25opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta25botonB = () => { this.setState({ pregunta25: { pregunta25opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta25botonC = () => { this.setState({ pregunta25: { pregunta25opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta25botonD = () => { this.setState({ pregunta25: { pregunta25opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta26botonA = () => { this.setState({ pregunta26: { pregunta26opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta26botonB = () => { this.setState({ pregunta26: { pregunta26opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta26botonC = () => { this.setState({ pregunta26: { pregunta26opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta26botonD = () => { this.setState({ pregunta26: { pregunta26opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta27botonA = () => { this.setState({ pregunta27: { pregunta27opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta27botonB = () => { this.setState({ pregunta27: { pregunta27opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta27botonC = () => { this.setState({ pregunta27: { pregunta27opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta27botonD = () => { this.setState({ pregunta27: { pregunta27opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta28botonA = () => { this.setState({ pregunta28: { pregunta28opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta28botonB = () => { this.setState({ pregunta28: { pregunta28opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta28botonC = () => { this.setState({ pregunta28: { pregunta28opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta28botonD = () => { this.setState({ pregunta28: { pregunta28opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta29botonA = () => { this.setState({ pregunta29: { pregunta29opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta29botonB = () => { this.setState({ pregunta29: { pregunta29opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta29botonC = () => { this.setState({ pregunta29: { pregunta29opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta29botonD = () => { this.setState({ pregunta29: { pregunta29opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta30botonA = () => { this.setState({ pregunta30: { pregunta30opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta30botonB = () => { this.setState({ pregunta30: { pregunta30opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta30botonC = () => { this.setState({ pregunta30: { pregunta30opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta30botonD = () => { this.setState({ pregunta30: { pregunta30opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta31botonA = () => { this.setState({ pregunta31: { pregunta31opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta31botonB = () => { this.setState({ pregunta31: { pregunta31opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta31botonC = () => { this.setState({ pregunta31: { pregunta31opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta31botonD = () => { this.setState({ pregunta31: { pregunta31opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta32botonA = () => { this.setState({ pregunta32: { pregunta32opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta32botonB = () => { this.setState({ pregunta32: { pregunta32opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta32botonC = () => { this.setState({ pregunta32: { pregunta32opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta32botonD = () => { this.setState({ pregunta32: { pregunta32opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta33botonA = () => { this.setState({ pregunta33: { pregunta33opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta33botonB = () => { this.setState({ pregunta33: { pregunta33opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta33botonC = () => { this.setState({ pregunta33: { pregunta33opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta33botonD = () => { this.setState({ pregunta33: { pregunta33opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta34botonA = () => { this.setState({ pregunta34: { pregunta34opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta34botonB = () => { this.setState({ pregunta34: { pregunta34opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta34botonC = () => { this.setState({ pregunta34: { pregunta34opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta34botonD = () => { this.setState({ pregunta34: { pregunta34opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta35botonA = () => { this.setState({ pregunta35: { pregunta35opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta35botonB = () => { this.setState({ pregunta35: { pregunta35opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta35botonC = () => { this.setState({ pregunta35: { pregunta35opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta35botonD = () => { this.setState({ pregunta35: { pregunta35opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta36botonA = () => { this.setState({ pregunta36: { pregunta36opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta36botonB = () => { this.setState({ pregunta36: { pregunta36opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta36botonC = () => { this.setState({ pregunta36: { pregunta36opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta36botonD = () => { this.setState({ pregunta36: { pregunta36opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta37botonA = () => { this.setState({ pregunta37: { pregunta37opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta37botonB = () => { this.setState({ pregunta37: { pregunta37opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta37botonC = () => { this.setState({ pregunta37: { pregunta37opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta37botonD = () => { this.setState({ pregunta37: { pregunta37opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta38botonA = () => { this.setState({ pregunta38: { pregunta38opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta38botonB = () => { this.setState({ pregunta38: { pregunta38opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta38botonC = () => { this.setState({ pregunta38: { pregunta38opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta38botonD = () => { this.setState({ pregunta38: { pregunta38opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta39botonA = () => { this.setState({ pregunta39: { pregunta39opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta39botonB = () => { this.setState({ pregunta39: { pregunta39opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta39botonC = () => { this.setState({ pregunta39: { pregunta39opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta39botonD = () => { this.setState({ pregunta39: { pregunta39opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta40botonA = () => { this.setState({ pregunta40: { pregunta40opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta40botonB = () => { this.setState({ pregunta40: { pregunta40opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta40botonC = () => { this.setState({ pregunta40: { pregunta40opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta40botonD = () => { this.setState({ pregunta40: { pregunta40opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta41botonA = () => { this.setState({ pregunta41: { pregunta41opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta41botonB = () => { this.setState({ pregunta41: { pregunta41opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta41botonC = () => { this.setState({ pregunta41: { pregunta41opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta41botonD = () => { this.setState({ pregunta41: { pregunta41opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta42botonA = () => { this.setState({ pregunta42: { pregunta42opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta42botonB = () => { this.setState({ pregunta42: { pregunta42opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta42botonC = () => { this.setState({ pregunta42: { pregunta42opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta42botonD = () => { this.setState({ pregunta42: { pregunta42opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta43botonA = () => { this.setState({ pregunta43: { pregunta43opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta43botonB = () => { this.setState({ pregunta43: { pregunta43opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta43botonC = () => { this.setState({ pregunta43: { pregunta43opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta43botonD = () => { this.setState({ pregunta43: { pregunta43opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta44botonA = () => { this.setState({ pregunta44: { pregunta44opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta44botonB = () => { this.setState({ pregunta44: { pregunta44opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta44botonC = () => { this.setState({ pregunta44: { pregunta44opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta44botonD = () => { this.setState({ pregunta44: { pregunta44opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta45botonA = () => { this.setState({ pregunta45: { pregunta45opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta45botonB = () => { this.setState({ pregunta45: { pregunta45opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta45botonC = () => { this.setState({ pregunta45: { pregunta45opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta45botonD = () => { this.setState({ pregunta45: { pregunta45opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta46botonA = () => { this.setState({ pregunta46: { pregunta46opcionElegida: 1, valor: 1, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta46botonB = () => { this.setState({ pregunta46: { pregunta46opcionElegida: 2, valor: 1, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta46botonC = () => { this.setState({ pregunta46: { pregunta46opcionElegida: 3, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta46botonD = () => { this.setState({ pregunta46: { pregunta46opcionElegida: 4, valor: 0, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta47botonA = () => { this.setState({ pregunta47: { pregunta47opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta47botonB = () => { this.setState({ pregunta47: { pregunta47opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta47botonC = () => { this.setState({ pregunta47: { pregunta47opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta47botonD = () => { this.setState({ pregunta47: { pregunta47opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta48botonA = () => { this.setState({ pregunta48: { pregunta48opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta48botonB = () => { this.setState({ pregunta48: { pregunta48opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta48botonC = () => { this.setState({ pregunta48: { pregunta48opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta48botonD = () => { this.setState({ pregunta48: { pregunta48opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta49botonA = () => { this.setState({ pregunta49: { pregunta49opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta49botonB = () => { this.setState({ pregunta49: { pregunta49opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta49botonC = () => { this.setState({ pregunta49: { pregunta49opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta49botonD = () => { this.setState({ pregunta49: { pregunta49opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }

  pregunta50botonA = () => { this.setState({ pregunta50: { pregunta50opcionElegida: 1, valor: 0, botonASeleccionado: true, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta50botonB = () => { this.setState({ pregunta50: { pregunta50opcionElegida: 2, valor: 0, botonASeleccionado: false, botonBSeleccionado: true, botonCSeleccionado: false, botonDSeleccionado: false } }) }
  pregunta50botonC = () => { this.setState({ pregunta50: { pregunta50opcionElegida: 3, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: true, botonDSeleccionado: false } }) }
  pregunta50botonD = () => { this.setState({ pregunta50: { pregunta50opcionElegida: 4, valor: 1, botonASeleccionado: false, botonBSeleccionado: false, botonCSeleccionado: false, botonDSeleccionado: true } }) }


  sumarYEnviarDatoAState = () => {
  	
    let objetoParaExportarATablaCuestionarioAQ
    let sumaTotal
    let interpretacionCuestionarioAQ
  	
  	sumaTotal = this.state.pregunta1.valor + this.state.pregunta2.valor + this.state.pregunta3.valor + this.state.pregunta4.valor + this.state.pregunta5.valor
              + this.state.pregunta6.valor + this.state.pregunta7.valor + this.state.pregunta8.valor + this.state.pregunta9.valor + this.state.pregunta10.valor
              + this.state.pregunta11.valor + this.state.pregunta12.valor + this.state.pregunta13.valor + this.state.pregunta14.valor + this.state.pregunta15.valor
              + this.state.pregunta16.valor + this.state.pregunta17.valor + this.state.pregunta18.valor + this.state.pregunta19.valor + this.state.pregunta20.valor
              + this.state.pregunta21.valor + this.state.pregunta22.valor + this.state.pregunta23.valor + this.state.pregunta24.valor + this.state.pregunta25.valor
              + this.state.pregunta26.valor + this.state.pregunta27.valor + this.state.pregunta28.valor + this.state.pregunta29.valor + this.state.pregunta30.valor
              + this.state.pregunta31.valor + this.state.pregunta32.valor + this.state.pregunta33.valor + this.state.pregunta34.valor + this.state.pregunta35.valor
              + this.state.pregunta36.valor + this.state.pregunta37.valor + this.state.pregunta38.valor + this.state.pregunta39.valor + this.state.pregunta40.valor
              + this.state.pregunta41.valor + this.state.pregunta42.valor + this.state.pregunta43.valor + this.state.pregunta44.valor + this.state.pregunta45.valor
              + this.state.pregunta46.valor + this.state.pregunta47.valor + this.state.pregunta48.valor + this.state.pregunta49.valor + this.state.pregunta50.valor

    if ( sumaTotal <= 10 ) { interpretacionCuestionarioAQ = '0-10 = Número bajo de características autistas.' }
    else if ( sumaTotal <= 22 ) { interpretacionCuestionarioAQ = '11-22 = Número promedio de características autistas. (Promedio para hombres 17, promedio para mujeres 15).' }
    else if ( sumaTotal <= 31 ) { interpretacionCuestionarioAQ = '23-31 = Número de características autistas por encima del promedio.' }
    else if ( sumaTotal <= 50 ) { interpretacionCuestionarioAQ = '32-50 = Número alto de características autistas (Promedio de la mayoría para el espectro de la condición de autismo es de 35). ' }

// 0-10= Número bajo de características autistas.
// 11-22= Número promedio de características autistas. (Promedio para hombres 17, promedio para mujeres 15).
// 23-31= Número de características autistas por encima del promedio.
// 32-50= Número alto de características autistas (Promedio de la mayoría para el espectro de la condición de autismo es de 35). 
    
    objetoParaExportarATablaCuestionarioAQ = {
      userId: this.state.userId,
      pregunta1: this.state.pregunta1.pregunta1opcionElegida,
      pregunta2: this.state.pregunta2.pregunta2opcionElegida,
      pregunta3: this.state.pregunta3.pregunta3opcionElegida,
      pregunta4: this.state.pregunta4.pregunta4opcionElegida,
      pregunta5: this.state.pregunta5.pregunta5opcionElegida,
      pregunta6: this.state.pregunta6.pregunta6opcionElegida,
      pregunta7: this.state.pregunta7.pregunta7opcionElegida,
      pregunta8: this.state.pregunta8.pregunta8opcionElegida,
      pregunta9: this.state.pregunta9.pregunta9opcionElegida,
      pregunta10: this.state.pregunta10.pregunta10opcionElegida,
      pregunta11: this.state.pregunta11.pregunta11opcionElegida,
      pregunta12: this.state.pregunta12.pregunta12opcionElegida,
      pregunta13: this.state.pregunta13.pregunta13opcionElegida,
      pregunta14: this.state.pregunta14.pregunta14opcionElegida,
      pregunta15: this.state.pregunta15.pregunta15opcionElegida,
      pregunta16: this.state.pregunta16.pregunta16opcionElegida,
      pregunta17: this.state.pregunta17.pregunta17opcionElegida,
      pregunta18: this.state.pregunta18.pregunta18opcionElegida,
      pregunta19: this.state.pregunta19.pregunta19opcionElegida,
      pregunta20: this.state.pregunta20.pregunta20opcionElegida,
      pregunta21: this.state.pregunta21.pregunta21opcionElegida,
      pregunta22: this.state.pregunta22.pregunta22opcionElegida,
      pregunta23: this.state.pregunta23.pregunta23opcionElegida,
      pregunta24: this.state.pregunta24.pregunta24opcionElegida,
      pregunta25: this.state.pregunta25.pregunta25opcionElegida,
      pregunta26: this.state.pregunta26.pregunta26opcionElegida,
      pregunta27: this.state.pregunta27.pregunta27opcionElegida,
      pregunta28: this.state.pregunta28.pregunta28opcionElegida,
      pregunta29: this.state.pregunta29.pregunta29opcionElegida,
      pregunta30: this.state.pregunta30.pregunta30opcionElegida,
      pregunta31: this.state.pregunta31.pregunta31opcionElegida,
      pregunta32: this.state.pregunta32.pregunta32opcionElegida,
      pregunta33: this.state.pregunta33.pregunta33opcionElegida,
      pregunta34: this.state.pregunta34.pregunta34opcionElegida,
      pregunta35: this.state.pregunta35.pregunta35opcionElegida,
      pregunta36: this.state.pregunta36.pregunta36opcionElegida,
      pregunta37: this.state.pregunta37.pregunta37opcionElegida,
      pregunta38: this.state.pregunta38.pregunta38opcionElegida,
      pregunta39: this.state.pregunta39.pregunta39opcionElegida,
      pregunta40: this.state.pregunta40.pregunta40opcionElegida,
      pregunta41: this.state.pregunta41.pregunta41opcionElegida,
      pregunta42: this.state.pregunta42.pregunta42opcionElegida,
      pregunta43: this.state.pregunta43.pregunta43opcionElegida,
      pregunta44: this.state.pregunta44.pregunta44opcionElegida,
      pregunta45: this.state.pregunta45.pregunta45opcionElegida,
      pregunta46: this.state.pregunta46.pregunta46opcionElegida,
      pregunta47: this.state.pregunta47.pregunta47opcionElegida,
      pregunta48: this.state.pregunta48.pregunta48opcionElegida,
      pregunta49: this.state.pregunta49.pregunta49opcionElegida,
      pregunta50: this.state.pregunta50.pregunta50opcionElegida,
      sumaTotal: sumaTotal,
      interpretacionAQ: interpretacionCuestionarioAQ
    }

    request
      .post(`${API_URL}/api/allAnswersCuestionarioAQ`)
      .send(objetoParaExportarATablaCuestionarioAQ)
      .then(() => {
        alert('Enviando informacion de CuestionarioAQ...')
        console.log(objetoParaExportarATablaCuestionarioAQ)
      })
      .catch(function(e) {
        console.log(e)
      })
    
    this.props.history.push('/')
  
  }

  render() {
    return (
      <Paper className='aq-material-ui-paper' zDepth={5} > 
        <div className='aq-container'>
		    <h1>Coeficiente del espectro (AQ)</h1>

		    <p className='aq-text'>A continuación aparece una lista de afirmaciones. Por favor lea cada una de ellas cuidadosamente y seleccione qué tanto se identifica con cada situación, eligiendo la respuesta que corresponda. Responda todas las preguntas.</p>

		      <div className='pregunta-1 aq-box-1'>  
			      <p className='aq-question'>1. Prefiero hacer actividades con otras personas que hacerlas yo solo.</p>
  				  <div className='aq-box-2'>
		          <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta1.botonASeleccionado === true ? true : false} onClick={this.pregunta1botonA} />
		          <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta1.botonBSeleccionado === true ? true : false} onClick={this.pregunta1botonB} />
		          <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta1.botonCSeleccionado === true ? true : false} onClick={this.pregunta1botonC} />
		          <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta1.botonDSeleccionado === true ? true : false} onClick={this.pregunta1botonD} />
	  			  </div>
			    </div>

		      <div className='pregunta-2 aq-box-1'>  
			      <p className='aq-question'>2. Sigo el mismo procedimiento una y otra vez para realizar actividades.</p>
				    <div className='aq-box-2'>
		          <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta2.botonASeleccionado === true ? true : false} onClick={this.pregunta2botonA} />
		          <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta2.botonBSeleccionado === true ? true : false} onClick={this.pregunta2botonB} />
		          <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta2.botonCSeleccionado === true ? true : false} onClick={this.pregunta2botonC} />
		          <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta2.botonDSeleccionado === true ? true : false} onClick={this.pregunta2botonD} />
				    </div>
			    </div>
          
          <div className='pregunta-3 aq-box-1'>  
            <p className='aq-question'>3. Al imaginar algo me es muy fácil crear la imagen en mi mente.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta3.botonASeleccionado === true ? true : false} onClick={this.pregunta3botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta3.botonBSeleccionado === true ? true : false} onClick={this.pregunta3botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta3.botonCSeleccionado === true ? true : false} onClick={this.pregunta3botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta3.botonDSeleccionado === true ? true : false} onClick={this.pregunta3botonD} />
            </div>
          </div>

          <div className='pregunta-4 aq-box-1'>  
            <p className='aq-question'>4. Frecuentemente me encierro tanto en una idea que pierdo de vista otras cosas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta4.botonASeleccionado === true ? true : false} onClick={this.pregunta4botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta4.botonBSeleccionado === true ? true : false} onClick={this.pregunta4botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta4.botonCSeleccionado === true ? true : false} onClick={this.pregunta4botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta4.botonDSeleccionado === true ? true : false} onClick={this.pregunta4botonD} />
            </div>
          </div>

          <div className='pregunta-5 aq-box-1'>  
            <p className='aq-question'>5. A menudo percibo sonidos leves que otras personas no pueden percibir.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta5.botonASeleccionado === true ? true : false} onClick={this.pregunta5botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta5.botonBSeleccionado === true ? true : false} onClick={this.pregunta5botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta5.botonCSeleccionado === true ? true : false} onClick={this.pregunta5botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta5.botonDSeleccionado === true ? true : false} onClick={this.pregunta5botonD} />
            </div>
          </div>

          <div className='pregunta-6 aq-box-1'>  
            <p className='aq-question'>6. Frecuentemente pongo atención a números de placa de auto o alguna otra información similar.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta6.botonASeleccionado === true ? true : false} onClick={this.pregunta6botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta6.botonBSeleccionado === true ? true : false} onClick={this.pregunta6botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta6.botonCSeleccionado === true ? true : false} onClick={this.pregunta6botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta6.botonDSeleccionado === true ? true : false} onClick={this.pregunta6botonD} />
            </div>
          </div>

          <div className='pregunta-7 aq-box-1'>  
            <p className='aq-question'>7. Frecuentemente otras personas me indican que digo cosas de forma grosera pero yo no lo siento así.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta7.botonASeleccionado === true ? true : false} onClick={this.pregunta7botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta7.botonBSeleccionado === true ? true : false} onClick={this.pregunta7botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta7.botonCSeleccionado === true ? true : false} onClick={this.pregunta7botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta7.botonDSeleccionado === true ? true : false} onClick={this.pregunta7botonD} />
            </div>
          </div>

          <div className='pregunta-8 aq-box-1'>  
            <p className='aq-question'>8. Cuando leo una historia, fácilmente puedo imaginar como se ven los personajes.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta8.botonASeleccionado === true ? true : false} onClick={this.pregunta8botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta8.botonBSeleccionado === true ? true : false} onClick={this.pregunta8botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta8.botonCSeleccionado === true ? true : false} onClick={this.pregunta8botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta8.botonDSeleccionado === true ? true : false} onClick={this.pregunta8botonD} />
            </div>
          </div>

          <div className='pregunta-9 aq-box-1'>  
            <p className='aq-question'>9. Me encantan las fechas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta9.botonASeleccionado === true ? true : false} onClick={this.pregunta9botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta9.botonBSeleccionado === true ? true : false} onClick={this.pregunta9botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta9.botonCSeleccionado === true ? true : false} onClick={this.pregunta9botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta9.botonDSeleccionado === true ? true : false} onClick={this.pregunta9botonD} />
            </div>
          </div>

          <div className='pregunta-10 aq-box-1'>  
            <p className='aq-question'>10. En una reunión, fácilmente puedo dar seguimiento a las conversaciones de otras personas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta10.botonASeleccionado === true ? true : false} onClick={this.pregunta10botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta10.botonBSeleccionado === true ? true : false} onClick={this.pregunta10botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta10.botonCSeleccionado === true ? true : false} onClick={this.pregunta10botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta10.botonDSeleccionado === true ? true : false} onClick={this.pregunta10botonD} />
            </div>
          </div>

          <div className='pregunta-11 aq-box-1'>  
            <p className='aq-question'>11. Se me facilitan las situaciones sociales.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta11.botonASeleccionado === true ? true : false} onClick={this.pregunta11botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta11.botonBSeleccionado === true ? true : false} onClick={this.pregunta11botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta11.botonCSeleccionado === true ? true : false} onClick={this.pregunta11botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta11.botonDSeleccionado === true ? true : false} onClick={this.pregunta11botonD} />
            </div>
          </div>

          <div className='pregunta-12 aq-box-1'>  
            <p className='aq-question'>12. Tiendo a notar detalles que otros no notan.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta12.botonASeleccionado === true ? true : false} onClick={this.pregunta12botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta12.botonBSeleccionado === true ? true : false} onClick={this.pregunta12botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta12.botonCSeleccionado === true ? true : false} onClick={this.pregunta12botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta12.botonDSeleccionado === true ? true : false} onClick={this.pregunta12botonD} />
            </div>
          </div>
          
          <div className='pregunta-13 aq-box-1'>  
            <p className='aq-question'>13. Prefiero ir a una biblioteca que a una fiesta.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta13.botonASeleccionado === true ? true : false} onClick={this.pregunta13botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta13.botonBSeleccionado === true ? true : false} onClick={this.pregunta13botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta13.botonCSeleccionado === true ? true : false} onClick={this.pregunta13botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta13.botonDSeleccionado === true ? true : false} onClick={this.pregunta13botonD} />
            </div>
          </div>

          <div className='pregunta-14 aq-box-1'>  
            <p className='aq-question'>14. Se me facilita inventar historias.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta14.botonASeleccionado === true ? true : false} onClick={this.pregunta14botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta14.botonBSeleccionado === true ? true : false} onClick={this.pregunta14botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta14.botonCSeleccionado === true ? true : false} onClick={this.pregunta14botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta14.botonDSeleccionado === true ? true : false} onClick={this.pregunta14botonD} />
            </div>
          </div>

          <div className='pregunta-15 aq-box-1'>  
            <p className='aq-question'>15. Me siento mas fuertemente atraído a las personas que a los objetos.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta15.botonASeleccionado === true ? true : false} onClick={this.pregunta15botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta15.botonBSeleccionado === true ? true : false} onClick={this.pregunta15botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta15.botonCSeleccionado === true ? true : false} onClick={this.pregunta15botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta15.botonDSeleccionado === true ? true : false} onClick={this.pregunta15botonD} />
            </div>
          </div>

          <div className='pregunta-16 aq-box-1'>  
            <p className='aq-question'>16. Tiendo a tener metas e intereses sólidos y me molestas no poder alcanzarlos.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta16.botonASeleccionado === true ? true : false} onClick={this.pregunta16botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta16.botonBSeleccionado === true ? true : false} onClick={this.pregunta16botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta16.botonCSeleccionado === true ? true : false} onClick={this.pregunta16botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta16.botonDSeleccionado === true ? true : false} onClick={this.pregunta16botonD} />
            </div>
          </div>

          <div className='pregunta-17 aq-box-1'>  
            <p className='aq-question'>17. Disfruto de las conversaciones informales.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta17.botonASeleccionado === true ? true : false} onClick={this.pregunta17botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta17.botonBSeleccionado === true ? true : false} onClick={this.pregunta17botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta17.botonCSeleccionado === true ? true : false} onClick={this.pregunta17botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta17.botonDSeleccionado === true ? true : false} onClick={this.pregunta17botonD} />
            </div>
          </div>

          <div className='pregunta-18 aq-box-1'>  
            <p className='aq-question'>18. Cuando hablo frecuentemente no dejo hablar a otros.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta18.botonASeleccionado === true ? true : false} onClick={this.pregunta18botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta18.botonBSeleccionado === true ? true : false} onClick={this.pregunta18botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta18.botonCSeleccionado === true ? true : false} onClick={this.pregunta18botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta18.botonDSeleccionado === true ? true : false} onClick={this.pregunta18botonD} />
            </div>
          </div>

          <div className='pregunta-19 aq-box-1'>  
            <p className='aq-question'>19. Me encantan los números.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta19.botonASeleccionado === true ? true : false} onClick={this.pregunta19botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta19.botonBSeleccionado === true ? true : false} onClick={this.pregunta19botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta19.botonCSeleccionado === true ? true : false} onClick={this.pregunta19botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta19.botonDSeleccionado === true ? true : false} onClick={this.pregunta19botonD} />
            </div>
          </div>

          <div className='pregunta-20 aq-box-1'>  
            <p className='aq-question'>20. Cuando leo una historia se me dificulta identificar las intenciones de los personajes.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta20.botonASeleccionado === true ? true : false} onClick={this.pregunta20botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta20.botonBSeleccionado === true ? true : false} onClick={this.pregunta20botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta20.botonCSeleccionado === true ? true : false} onClick={this.pregunta20botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta20.botonDSeleccionado === true ? true : false} onClick={this.pregunta20botonD} />
            </div>
          </div>

          <div className='pregunta-21 aq-box-1'>  
            <p className='aq-question'>21. No disfruto leer obras de ficción.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta21.botonASeleccionado === true ? true : false} onClick={this.pregunta21botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta21.botonBSeleccionado === true ? true : false} onClick={this.pregunta21botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta21.botonCSeleccionado === true ? true : false} onClick={this.pregunta21botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta21.botonDSeleccionado === true ? true : false} onClick={this.pregunta21botonD} />
            </div>
          </div>

          <div className='pregunta-22 aq-box-1'>  
            <p className='aq-question'>22. Se me dificulta hacer nuevos amigos.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta22.botonASeleccionado === true ? true : false} onClick={this.pregunta22botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta22.botonBSeleccionado === true ? true : false} onClick={this.pregunta22botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta22.botonCSeleccionado === true ? true : false} onClick={this.pregunta22botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta22.botonDSeleccionado === true ? true : false} onClick={this.pregunta22botonD} />
            </div>
          </div>
          
          <div className='pregunta-23 aq-box-1'>  
            <p className='aq-question'>23. Percibo modelos en las cosas todo el tiempo.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta23.botonASeleccionado === true ? true : false} onClick={this.pregunta23botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta23.botonBSeleccionado === true ? true : false} onClick={this.pregunta23botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta23.botonCSeleccionado === true ? true : false} onClick={this.pregunta23botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta23.botonDSeleccionado === true ? true : false} onClick={this.pregunta23botonD} />
            </div>
          </div>

          <div className='pregunta-24 aq-box-1'>  
            <p className='aq-question'>24. Prefiero ir al teatro que a un museo.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta24.botonASeleccionado === true ? true : false} onClick={this.pregunta24botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta24.botonBSeleccionado === true ? true : false} onClick={this.pregunta24botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta24.botonCSeleccionado === true ? true : false} onClick={this.pregunta24botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta24.botonDSeleccionado === true ? true : false} onClick={this.pregunta24botonD} />
            </div>
          </div>

          <div className='pregunta-25 aq-box-1'>  
            <p className='aq-question'>25. No me molesta si mi rutina diaria es interrumpida.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta25.botonASeleccionado === true ? true : false} onClick={this.pregunta25botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta25.botonBSeleccionado === true ? true : false} onClick={this.pregunta25botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta25.botonCSeleccionado === true ? true : false} onClick={this.pregunta25botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta25.botonDSeleccionado === true ? true : false} onClick={this.pregunta25botonD} />
            </div>
          </div>

          <div className='pregunta-26 aq-box-1'>  
            <p className='aq-question'>26. Frecuentemente no sé cómo continuar con una conversación.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta26.botonASeleccionado === true ? true : false} onClick={this.pregunta26botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta26.botonBSeleccionado === true ? true : false} onClick={this.pregunta26botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta26.botonCSeleccionado === true ? true : false} onClick={this.pregunta26botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta26.botonDSeleccionado === true ? true : false} onClick={this.pregunta26botonD} />
            </div>
          </div>

          <div className='pregunta-27 aq-box-1'>  
            <p className='aq-question'>27. Es fácil para mi leer entre líneas cuando hablo con otras personas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta27.botonASeleccionado === true ? true : false} onClick={this.pregunta27botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta27.botonBSeleccionado === true ? true : false} onClick={this.pregunta27botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta27.botonCSeleccionado === true ? true : false} onClick={this.pregunta27botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta27.botonDSeleccionado === true ? true : false} onClick={this.pregunta27botonD} />
            </div>
          </div>

          <div className='pregunta-28 aq-box-1'>  
            <p className='aq-question'>28. A menudo me concentro más en el todo que en los detalles.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta28.botonASeleccionado === true ? true : false} onClick={this.pregunta28botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta28.botonBSeleccionado === true ? true : false} onClick={this.pregunta28botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta28.botonCSeleccionado === true ? true : false} onClick={this.pregunta28botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta28.botonDSeleccionado === true ? true : false} onClick={this.pregunta28botonD} />
            </div>
          </div>

          <div className='pregunta-29 aq-box-1'>  
            <p className='aq-question'>29. No soy muy bueno recordando números telefónicos.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta29.botonASeleccionado === true ? true : false} onClick={this.pregunta29botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta29.botonBSeleccionado === true ? true : false} onClick={this.pregunta29botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta29.botonCSeleccionado === true ? true : false} onClick={this.pregunta29botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta29.botonDSeleccionado === true ? true : false} onClick={this.pregunta29botonD} />
            </div>
          </div>

          <div className='pregunta-30 aq-box-1'>  
            <p className='aq-question'>30. Normalmente no noto ligeros cambios generados en una situación o en una persona.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta30.botonASeleccionado === true ? true : false} onClick={this.pregunta30botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta30.botonBSeleccionado === true ? true : false} onClick={this.pregunta30botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta30.botonCSeleccionado === true ? true : false} onClick={this.pregunta30botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta30.botonDSeleccionado === true ? true : false} onClick={this.pregunta30botonD} />
            </div>
          </div>

          <div className='pregunta-31 aq-box-1'>  
            <p className='aq-question'>31. Puedo notar cuando alguien se aburre al escucharme.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta31.botonASeleccionado === true ? true : false} onClick={this.pregunta31botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta31.botonBSeleccionado === true ? true : false} onClick={this.pregunta31botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta31.botonCSeleccionado === true ? true : false} onClick={this.pregunta31botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta31.botonDSeleccionado === true ? true : false} onClick={this.pregunta31botonD} />
            </div>
          </div>

          <div className='pregunta-32 aq-box-1'>  
            <p className='aq-question'>32. Se me facilita realizar más de una actividad a la vez.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta32.botonASeleccionado === true ? true : false} onClick={this.pregunta32botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta32.botonBSeleccionado === true ? true : false} onClick={this.pregunta32botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta32.botonCSeleccionado === true ? true : false} onClick={this.pregunta32botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta32.botonDSeleccionado === true ? true : false} onClick={this.pregunta32botonD} />
            </div>
          </div>
          
          <div className='pregunta-33 aq-box-1'>  
            <p className='aq-question'>33. Cuando hablo por teléfono es díficil identificar el momento en que me toca hablar.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta33.botonASeleccionado === true ? true : false} onClick={this.pregunta33botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta33.botonBSeleccionado === true ? true : false} onClick={this.pregunta33botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta33.botonCSeleccionado === true ? true : false} onClick={this.pregunta33botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta33.botonDSeleccionado === true ? true : false} onClick={this.pregunta33botonD} />
            </div>
          </div>

          <div className='pregunta-34 aq-box-1'>  
            <p className='aq-question'>34. Disfruto hacer cosas de manera espontánea.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta34.botonASeleccionado === true ? true : false} onClick={this.pregunta34botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta34.botonBSeleccionado === true ? true : false} onClick={this.pregunta34botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta34.botonCSeleccionado === true ? true : false} onClick={this.pregunta34botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta34.botonDSeleccionado === true ? true : false} onClick={this.pregunta34botonD} />
            </div>
          </div>

          <div className='pregunta-35 aq-box-1'>  
            <p className='aq-question'>35. Por lo general soy el último en entender un chiste.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta35.botonASeleccionado === true ? true : false} onClick={this.pregunta35botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta35.botonBSeleccionado === true ? true : false} onClick={this.pregunta35botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta35.botonCSeleccionado === true ? true : false} onClick={this.pregunta35botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta35.botonDSeleccionado === true ? true : false} onClick={this.pregunta35botonD} />
            </div>
          </div>

          <div className='pregunta-36 aq-box-1'>  
            <p className='aq-question'>36. Me es fácil identificar lo que alguien piensa o siente con solo mirarlo al rostro.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta36.botonASeleccionado === true ? true : false} onClick={this.pregunta36botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta36.botonBSeleccionado === true ? true : false} onClick={this.pregunta36botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta36.botonCSeleccionado === true ? true : false} onClick={this.pregunta36botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta36.botonDSeleccionado === true ? true : false} onClick={this.pregunta36botonD} />
            </div>
          </div>

          <div className='pregunta-37 aq-box-1'>  
            <p className='aq-question'>37. Después de una interrupción puedo regresar a lo que estaba haciendo rápidamente.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta37.botonASeleccionado === true ? true : false} onClick={this.pregunta37botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta37.botonBSeleccionado === true ? true : false} onClick={this.pregunta37botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta37.botonCSeleccionado === true ? true : false} onClick={this.pregunta37botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta37.botonDSeleccionado === true ? true : false} onClick={this.pregunta37botonD} />
            </div>
          </div>

          <div className='pregunta-38 aq-box-1'>  
            <p className='aq-question'>38. Se me facilitan las conversaciones informales.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta38.botonASeleccionado === true ? true : false} onClick={this.pregunta38botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta38.botonBSeleccionado === true ? true : false} onClick={this.pregunta38botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta38.botonCSeleccionado === true ? true : false} onClick={this.pregunta38botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta38.botonDSeleccionado === true ? true : false} onClick={this.pregunta38botonD} />
            </div>
          </div>

          <div className='pregunta-39 aq-box-1'>  
            <p className='aq-question'>39. La gente a menudo me dice que doy vueltas sobre el mismo asunto.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta39.botonASeleccionado === true ? true : false} onClick={this.pregunta39botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta39.botonBSeleccionado === true ? true : false} onClick={this.pregunta39botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta39.botonCSeleccionado === true ? true : false} onClick={this.pregunta39botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta39.botonDSeleccionado === true ? true : false} onClick={this.pregunta39botonD} />
            </div>
          </div>

          <div className='pregunta-40 aq-box-1'>  
            <p className='aq-question'>40. En mi niñez disfrutaba con otros niños los juegos donde se fingía ser alguien más.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta40.botonASeleccionado === true ? true : false} onClick={this.pregunta40botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta40.botonBSeleccionado === true ? true : false} onClick={this.pregunta40botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta40.botonCSeleccionado === true ? true : false} onClick={this.pregunta40botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta40.botonDSeleccionado === true ? true : false} onClick={this.pregunta40botonD} />
            </div>
          </div>

          <div className='pregunta-41 aq-box-1'>  
            <p className='aq-question'>41. Me gusta compilar información acerca de categorías (ejemplo: tipos de plantas, tipos de autos, etc.)</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta41.botonASeleccionado === true ? true : false} onClick={this.pregunta41botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta41.botonBSeleccionado === true ? true : false} onClick={this.pregunta41botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta41.botonCSeleccionado === true ? true : false} onClick={this.pregunta41botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta41.botonDSeleccionado === true ? true : false} onClick={this.pregunta41botonD} />
            </div>
          </div>

          <div className='pregunta-42 aq-box-1'>  
            <p className='aq-question'>42. Se me dificulta imaginar ser otra persona.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta42.botonASeleccionado === true ? true : false} onClick={this.pregunta42botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta42.botonBSeleccionado === true ? true : false} onClick={this.pregunta42botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta42.botonCSeleccionado === true ? true : false} onClick={this.pregunta42botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta42.botonDSeleccionado === true ? true : false} onClick={this.pregunta42botonD} />
            </div>
          </div>
          
          <div className='pregunta-43 aq-box-1'>  
            <p className='aq-question'>43. Me gusta planear cuidadosamente las actividades en las que participo.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta43.botonASeleccionado === true ? true : false} onClick={this.pregunta43botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta43.botonBSeleccionado === true ? true : false} onClick={this.pregunta43botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta43.botonCSeleccionado === true ? true : false} onClick={this.pregunta43botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta43.botonDSeleccionado === true ? true : false} onClick={this.pregunta43botonD} />
            </div>
          </div>

          <div className='pregunta-44 aq-box-1'>  
            <p className='aq-question'>44. Disfruto los eventos sociales.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta44.botonASeleccionado === true ? true : false} onClick={this.pregunta44botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta44.botonBSeleccionado === true ? true : false} onClick={this.pregunta44botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta44.botonCSeleccionado === true ? true : false} onClick={this.pregunta44botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta44.botonDSeleccionado === true ? true : false} onClick={this.pregunta44botonD} />
            </div>
          </div>

          <div className='pregunta-45 aq-box-1'>  
            <p className='aq-question'>45. Se me dificulta identificar las intenciones de las personas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta45.botonASeleccionado === true ? true : false} onClick={this.pregunta45botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta45.botonBSeleccionado === true ? true : false} onClick={this.pregunta45botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta45.botonCSeleccionado === true ? true : false} onClick={this.pregunta45botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta45.botonDSeleccionado === true ? true : false} onClick={this.pregunta45botonD} />
            </div>
          </div>

          <div className='pregunta-46 aq-box-1'>  
            <p className='aq-question'>46. Me provocan ansiedad las situaciones nuevas para mí.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta46.botonASeleccionado === true ? true : false} onClick={this.pregunta46botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta46.botonBSeleccionado === true ? true : false} onClick={this.pregunta46botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta46.botonCSeleccionado === true ? true : false} onClick={this.pregunta46botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta46.botonDSeleccionado === true ? true : false} onClick={this.pregunta46botonD} />
            </div>
          </div>

          <div className='pregunta-47 aq-box-1'>  
            <p className='aq-question'>47. Disfruto de conocer gente nueva.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta47.botonASeleccionado === true ? true : false} onClick={this.pregunta47botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta47.botonBSeleccionado === true ? true : false} onClick={this.pregunta47botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta47.botonCSeleccionado === true ? true : false} onClick={this.pregunta47botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta47.botonDSeleccionado === true ? true : false} onClick={this.pregunta47botonD} />
            </div>
          </div>

          <div className='pregunta-48 aq-box-1'>  
            <p className='aq-question'>48. Tengo habilidades diplomáticas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta48.botonASeleccionado === true ? true : false} onClick={this.pregunta48botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta48.botonBSeleccionado === true ? true : false} onClick={this.pregunta48botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta48.botonCSeleccionado === true ? true : false} onClick={this.pregunta48botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta48.botonDSeleccionado === true ? true : false} onClick={this.pregunta48botonD} />
            </div>
          </div>

          <div className='pregunta-49 aq-box-1'>  
            <p className='aq-question'>49. No soy bueno recordando los cumpleaños de otras personas.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta49.botonASeleccionado === true ? true : false} onClick={this.pregunta49botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta49.botonBSeleccionado === true ? true : false} onClick={this.pregunta49botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta49.botonCSeleccionado === true ? true : false} onClick={this.pregunta49botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta49.botonDSeleccionado === true ? true : false} onClick={this.pregunta49botonD} />
            </div>
          </div>

          <div className='pregunta-50 aq-box-1'>  
            <p className='aq-question'>50. Se me facilita participar en juegos con niños fingiendo otros roles.</p>
            <div className='aq-box-2'>
              <RaisedButton className='aq-button' label='a. Coincido totalmente'        primary={this.state.pregunta50.botonASeleccionado === true ? true : false} onClick={this.pregunta50botonA} />
              <RaisedButton className='aq-button' label='b. Coincido parcialmente'      primary={this.state.pregunta50.botonBSeleccionado === true ? true : false} onClick={this.pregunta50botonB} />
              <RaisedButton className='aq-button' label='c. Parcialmente en desacuerdo' primary={this.state.pregunta50.botonCSeleccionado === true ? true : false} onClick={this.pregunta50botonC} />
              <RaisedButton className='aq-button' label='d. Totalmente en desacuerdo'   primary={this.state.pregunta50.botonDSeleccionado === true ? true : false} onClick={this.pregunta50botonD} />
            </div>
          </div> 
		      
		      <Paper className='aq-enviar-text-material-ui-paper' >
		        <div>
		          <p className='aq-text'>Si ya respondió todas las preguntas, por favor dé click en el siguiente botón para enviar sus respuestas</p>
		        </div>
		        <div>
			      <RaisedButton
			        className='header-button'
			        label="Enviar respuestas"
			        secondary={true}
			        onClick={this.sumarYEnviarDatoAState}
			      />
                 </div>  
		       </Paper>
        </div>
	    </Paper>     
    )
  }
}

export default CuestionarioAQ;