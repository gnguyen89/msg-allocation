import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RadioButtonChecked from 'material-ui-icons/RadioButtonChecked';
import RadioButtonUnchecked from 'material-ui-icons/RadioButtonUnchecked';


export default function RadioButton(props) {
  const { isChecked, onClick, dataTestId } = props;

  return (
    <div className="radioInputStyle" onClick={onClick}>
      {isChecked
        ? <RadioButtonChecked className={classNames(["radio", "radio-checked"])} />
        : <RadioButtonUnchecked className={classNames(["radio", "radio-unchecked"])} />}
    </div>
  );
}

RadioButton.defaultProps = {
  isChecked: false,
};

RadioButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};
