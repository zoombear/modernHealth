import React, { Component } from 'react';

import './App.css';
// import AppHeader from './AppHeader';
import ProgramCategory from './ProgramCategory';
import { linkSections } from './ProgramUtils';
import { getPrograms } from './api';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [],
    };
  }

  componentDidMount() {

    getPrograms().then(program => {
        linkSections(program).then(smattering => {
          this.setState({
            programs: smattering
          });
        });
      });
  }

  render() {
    const { programs } = this.state;

    return (
      <div className="App">
        {
          programs.map(program => (
            <ProgramCategory
              key={program.id}
              id={program.id}
              sections={program.sections}
            />
          ))
        }
      </div>
    );
  }
}
