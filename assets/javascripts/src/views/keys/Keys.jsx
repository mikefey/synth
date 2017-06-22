import React from 'react';
import PropTypes from 'prop-types';
import config from 'config/config';
import Options from 'views/options/OptionsContainer.jsx';
import ShowOptionsButton from 'ui/show-options-button/ShowOptionsButton.jsx';
import Key from './Key.jsx';
import style from './Keys.scss';


/**
 * Keys component
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const Keys = (props) => {
  const state = props.mainState;
  const currentOctave = state.currentOctave.value;
  const sound = state.currentSound;
  const soundData = {
    title: 'Sound',
    stateProperty: 'currentSound',
    action: props.actions.changeSound,
    options: config.sounds,
  };

  const octaveData = {
    title: 'Octaves',
    stateProperty: 'currentOctave',
    action: props.actions.changeOctave,
    options: config.keyOctaves,
  };


  /**
   * Shows the options component
   * @return {undefined} - undefined
   */
  const showOptions = () => {
    props.actions.showOptions();
  };


  /**
   * Renders the pads
   * @return {Array<ReactElement>} - An array of pad components
   */
  const renderKeys = () => {
    const keys = [];
    const octaveNotesOne = config.noteFrequencies.octaves[currentOctave[0]];
    const octaveNotesTwo = config.noteFrequencies.octaves[currentOctave[1]];
    const octaveNotes = Object.assign({}, octaveNotesOne, octaveNotesTwo);

    Object.keys(octaveNotes).forEach((key, index) => {
      const frequency = octaveNotes[key];
      const isSharp = key.indexOf('#') > -1;

      keys.push(
        <Key
          audioContext={props.audioContext}
          frequency={frequency}
          key={`key-${key}`}
          index={index}
          sharp={isSharp}
          sound={sound}
        />,
      );
    });

    return keys;
  };


  /**
   * Renders component
   * @return {ReactElement} - The component
   */
  return (
    <div className={style.wrapper}>
      <ShowOptionsButton clickHandler={showOptions} />
      <div className={style.keysWrapper}>
        {renderKeys()}
      </div>
      <Options data={[soundData, octaveData]} />
    </div>
  );
};


/**
 * PropTypes
 * @prop {Object} actions - An object containing action functions
 * @prop {Object} audioContext - The browser audioContext object
 * @prop {Object} mainState - The Main component state
 */
Keys.propTypes = {
  actions: PropTypes.object.isRequired,
  audioContext: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
};

export default Keys;
