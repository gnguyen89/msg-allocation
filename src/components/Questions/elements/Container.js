import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Container(props) {
  return (
    <div className={`question-container ${props.className}`}>
      {props.children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
  bold: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bold: PropTypes.bool,
};
