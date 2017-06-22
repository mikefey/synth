import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroupButton from './ButtonGroupButton.jsx';
import style from './ButtonGroup.scss';


/**
 * Button group component
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const ButtonGroup = (props) => {
  /**
   * Renders buttons
   * @return {Array<ReactElement>} - The buttons
   */
  const renderButtons = () => {
    return props.data.options.map((option) => {
      return (
        <ButtonGroupButton
          action={props.data.action}
          data={option}
          key={`button-group-button-${option.value}`}
          mainState={props.mainState}
          stateProperty={props.data.stateProperty}
        />
      );
    });
  };


  return (
    <div className={style.wrapper}>
      <div className={style.title}>{props.data.title}</div>
      <div className={style.optionsWrapper}>
        {renderButtons()}
      </div>
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} actions - An object containing action functions
 * @prop {Array} data - An array of objects for each button
 * @prop {Object} mainState - The Main component state
 */
ButtonGroup.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
};

export default ButtonGroup;
