import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default class Body extends Component {
  constructor() {
    super();

    this.state = {
      isSelected: false,
    };

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    const { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  }

  render() {
    const { img, selected } = this.props;

    return (
      <div className="big-circle" onClick={() => this.toggleSelect()}>
        {!this.state.isSelected ? 
          <img className="img-circle" src={img} height="50px" width="50px" /> : 
          <img className="img-circle" src={selected} height="50px" width="50px" />
        }
      </div>
    );
  }
}

Body.defaultProps = {
  className: '',
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
  selected: PropTypes.string,
};
