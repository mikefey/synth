import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'ui/button-group/ButtonGroup.jsx';
import CloseButton from 'ui/close-button/CloseButton.jsx';
import style from './Options.scss';


/**
 * Options component
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const Options = (props) => {
  const wrapperStyle = (props.optionsState.show)
    ? style.wrapperShowing
    : style.wrapper;


  /**
   * Renders button gropus
   * @return {Array<ReactElement>} - The button groups
   */
  const renderButtonGroups = () => {
    return props.data.map((optionData) => {
      return (
        <ButtonGroup
          data={optionData}
          actions={props.actions}
          key={`button-group-${optionData.stateProperty}`}
          mainState={props.mainState}
        />
      );
    });
  };


  /**
   * Hides the options component
   * @return {undefined} - undefined
   */
  const hideOptions = () => {
    props.actions.hideOptions();
  };


  return (
    <div className={wrapperStyle}>
      <CloseButton clickHandler={hideOptions} />
      <div className={style.optionsWrapper}>
        {renderButtonGroups()}
      </div>
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} actions - An object containing action functions
 * @prop {Array} data - An array of objects with data to pass to the button
 * groups
 * @prop {Object} mainState - The Main component state
 * @prop {Object} optionsState - The Options component state
 */
Options.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  mainState: PropTypes.object.isRequired,
  optionsState: PropTypes.object.isRequired,
};

export default Options;
