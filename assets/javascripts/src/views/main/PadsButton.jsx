import React from 'react';
import PropTypes from 'prop-types';
import config from 'config/config';
import style from './PadsButton.scss';


/**
 * PadsButton (button to switch to pads view)
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const PadsButton = (props) => {
  const state = props.mainState;


  /**
   * Click handler
   * @return {undefined} - undefined
   */
  const onClick = () => {
    props.actions.changeUI('pads');
    props.actions.changeOctave(config.padOctaves[3]);
  };


  const className = (state.currentUI === 'pads')
    ? style.wrapperSelected
    : style.wrapper;


  /**
   * Renders component
   * @return {ReactElement} - The component
   */
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
      <div className={style.iconLine} />
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} actions - An object containing action functions
 * @prop {Object} mainState - The Main component state
 */
PadsButton.propTypes = {
  actions: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
};

export default PadsButton;
