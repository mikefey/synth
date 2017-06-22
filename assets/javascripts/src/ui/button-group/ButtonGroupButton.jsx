import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonGroupButton.scss';


/**
 * Button group button component
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const ButtonGroupButton = (props) => {
  const onClick = () => {
    props.action(props.data);
  };

  const buttonClassName =
    (props.mainState[props.stateProperty].value.toString() === props.data.value.toString())
    ? style.buttonSelected
    : style.button;


  return (
    <div className={style.wrapper}>
      <div
        className={buttonClassName}
        onClick={onClick}
      />
      <div className={style.title}>{props.data.title}</div>
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} actions - An object containing action functions
 * @prop {Array} data - An object with button data
 * @prop {Object} padsState - The Pads component state
 * @prop {String} stateProperty - The property on the mainState this button
 * affects
 */
ButtonGroupButton.propTypes = {
  action: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
  stateProperty: PropTypes.string.isRequired,
};

export default ButtonGroupButton;
