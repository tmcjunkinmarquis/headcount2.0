import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program'
import CardContainer from './CardContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schoolRepository: new DistrictRepository(kinderData),
      schoolNames: [],
      schoolData: {}
    }
  }

  componentDidMount() {
    const schoolNames = this.state.schoolRepository.findAllMatches()
    const schoolData = this.state.schoolRepository.stats
    this.setState({ 
      schoolNames, 
      schoolData
     })
  }

  render() {
    return (
      <div>
        <h1>HeadCount</h1>
        {/* <SearchField /> */}
        <CardContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;
