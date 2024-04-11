import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super()

    this.state = {
      aboutPage: true,
      displayedText: ""
    }

    this.changeDisplay = this.changeDisplay.bind(this)
  }
  
  changeDisplay() {
    (this.state.aboutPage) ?
    this.setState({ 
      aboutPage: false,
      displayedText: "Oops"
    }):
    this.setState({
      aboutPage:true,
      displayedText: "About"
    })
  }

  render() {
    return (
        <div>
          <button onClick={this.changeDisplay}>changeDisplay</button>
          <h2>{this.state.displayedText}</h2>
        </div>
      );
    
  }
}