import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgramCategory.css';

import ProgramList from './ProgramList'
import { getProgramByID } from './api';

const propTypes = {
  id: PropTypes.number.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};

/**
 * Display a section header and a list of sections.
 */
export default class ProgramCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    getProgramByID(this.props.id).then(program => {
      console.log(program);
      this.setState({
        title: program.name
      });
    });
  }

  render() {
    const { title } = this.state;
    const { sections } = this.props;

    return (
      <div className="category-section">
        <div className="category-title">{title}</div>
        <ProgramList sections={sections} />
      </div>
    );
  }
}

ProgramCategory.propTypes = propTypes;
