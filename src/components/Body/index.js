import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Body(props) {
  return (
    <div
      className={classNames(
        { regular: !props.bold },
        { bold: props.bold },
        "body",
        "primary",
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

Body.defaultProps = {
  className: '',
  style: {},
  bold: false,
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  bold: PropTypes.bool,
};
