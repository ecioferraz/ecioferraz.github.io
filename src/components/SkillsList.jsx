import PropTypes from 'prop-types';
import React from 'react';

export default function SkillsList({ list }) {
  return (
    <ul className="skill">
      {list.map((li, i) => (
        <li key={i}>{ li }</li>
      ))}
    </ul>
  );
}

SkillsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};
