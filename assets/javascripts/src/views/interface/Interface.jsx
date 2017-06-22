import React from 'react';
import PropTypes from 'prop-types';
import Pads from 'views/pads/PadsContainer.jsx';
import Keys from 'views/keys/KeysContainer.jsx';
import style from './Interface.scss';


/**
 * Current interface to make sounds (pads or keys)
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const Interface = (props) => {
  /**
   * Renders the UI, either keys or pads
   * @returns {ReactElement} - The UI
   */
  const renderUi = () => {
    let ui;
    const mainState = props.mainState;

    if (mainState.currentUI === 'pads') {
      ui = (
        <Pads audioContext={props.audioContext} />
      );
    } else if (mainState.currentUI === 'keys') {
      ui = (
        <Keys audioContext={props.audioContext} />
      );
    }

    return ui;
  };


  /**
   * Renders component
   * @return {ReactElement} - The component
   */
  return (
    <div className={style.wrapper}>
      {renderUi()}
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} audioContext - The browser audioContext object
 * @prop {Object} mainState - The Main component state
 */
Interface.propTypes = {
  audioContext: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
};

export default Interface;
