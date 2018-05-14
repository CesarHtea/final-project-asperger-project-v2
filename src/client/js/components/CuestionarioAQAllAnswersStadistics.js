import React, { Component } from 'react';
import request from 'superagent';


class CuestionarioAQAllAnswersStadistics extends Component {

  constructor() {
    super();

    this.state = {
      allAnswersCuestionarioAQ: []
    };
  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/allAnswersCuestionarioAQ`)
      .then((data) => {
        this.setState({
          allAnswersCuestionarioAQ: data.body
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  render() {
  	console.log(this.state.allAnswersCuestionarioAQ)
    return (
      <h1>See console</h1>
    )
  }

}



export default CuestionarioAQAllAnswersStadistics;