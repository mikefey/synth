import React from 'react';
import PropTypes from 'prop-types';
import style from './Display.scss';


/**
 * PadsButton (button to switch to pads view)
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const Display = (props) => {
  const state = props.mainState;


  /**
   * Renders component
   * @return {ReactElement} - The component
   */
  return (
    <div className={style.wrapper}>
      <ul className={style.items}>
        <li className={style.item}>
          <span className={style.itemTitle}>Sound: </span>
          <span className={style.itemText}>{state.currentSound.title}</span>
        </li>
        <li className={style.item}>
          <span className={style.itemTitle}>Octave: </span>
          <span className={style.itemText}>{state.currentOctave.title}</span>
        </li>
      </ul>
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} mainState - The Main component state
 */
Display.propTypes = {
  mainState: PropTypes.object.isRequired,
};

export default Display;
