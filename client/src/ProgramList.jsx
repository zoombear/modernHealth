import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgramList.css';

import ProgramCard from './ProgramCard';

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};

/**
 * Displaye a list of section cards.
 */
export default class ProgramList extends Component {
  render() {
    const { sections } = this.props;

    return (
      <div>
      {
        (sections && sections.length)
        ? sections.map(section => (
          <ProgramCard
            key={section.id}
            section={section}
          />
        ))
        : <div>No sections found.</div>
      }
      </div>
    );
  }
}

ProgramList.propTypes = propTypes;
