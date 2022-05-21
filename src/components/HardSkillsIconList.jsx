import PropTypes from 'prop-types';
import React from 'react';

export default function HardSkillsIconList({ first, second }) {
  return (
    <ul className="icon-list">
      <li hidden={ first }><i className="fab fa-git-alt" /></li>
      <li hidden={ first }><i className="fab fa-js" /></li>
      <li hidden={ first }><i className="fab fa-html5" /></li>
      <li hidden={ first }><i className="fab fa-css3-alt" /></li>
      <li hidden={ first }><i className="fab fa-react" /></li>
      <li hidden={ first }><i className="fab fa-node" /></li>
      <li hidden={ first }><span className="iconify icon" data-icon="simple-icons:typescript" data-width="12"></span></li>
      <li hidden={ second }><span className="iconify icon" data-icon="simple-icons:express" data-width="16"></span></li>
      <li hidden={ second }><i className="fas fa-flask" /></li>
      <li hidden={ second }><span className="iconify icon" data-icon="file-icons:eslint" data-width="16"></span></li>
      <li hidden={ second }><span className="iconify icon" data-icon="bxl:mongodb" data-width="20"></span></li>
      <li hidden={ second }><span className="iconify icon" data-icon="bxl:java" data-width="20"></span></li>
      <li hidden={ second }><i className="fas fa-database" /></li>
      <li hidden={ second }><i className="fab fa-docker" /></li>
    </ul>
  );
}

HardSkillsIconList.propTypes = {
  first: PropTypes.bool,
  second: PropTypes.bool,
};

HardSkillsIconList.defaultProps = {
  first: false,
  second: false,
};
