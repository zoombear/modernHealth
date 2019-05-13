import React from 'react';

import './ProgramCard.css';

export default function ProgramCard(props) {
  return (
    <div className="card-section">
      <div className="card-title">{props.section.name}</div>
      <div className="card-description">{props.section.description}</div>
    </div>
  );
}
