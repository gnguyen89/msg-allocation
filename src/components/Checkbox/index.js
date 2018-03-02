import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import CheckBox from 'material-ui-icons/CheckBox';


export default function Checkbox(props) {
  const { isChecked, onClick, disabled } = props;

  return (
    <div className="checkboxInputStyle" onClick={onClick}>
      {isChecked
        ? <CheckBox className={classNames(["checkbox", "checked"])} />
        : <CheckBoxOutlineBlank className={classNames(["checkbox", "unchecked", {
          ['disabled']: disabled,
        }])} />}
    </div>
  );
}

Checkbox.defaultProps = {
  isChecked: false,
  disabled: false,
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
