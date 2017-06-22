import React from 'react';
import PropTypes from 'prop-types';
import config from 'config/config';
import style from './KeysButton.scss';


/**
 * KeysButton component (button to switch to keys view)
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const KeysButton = (props) => {
  const state = props.mainState;


  /**
   * Click handler
   * @return {undefined} - undefined
   */
  const onClick = () => {
    props.actions.changeOctave(config.keyOctaves[1]);
    props.actions.changeUI('keys');
  };

  const className = (state.currentUI === 'keys')
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
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} actions - An object containing action functions
 * @prop {Object} mainState - The Main component state
 */
KeysButton.propTypes = {
  actions: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
};

export default KeysButton;
