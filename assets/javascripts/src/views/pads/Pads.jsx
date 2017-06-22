import React from 'react';
import PropTypes from 'prop-types';
import config from 'config/config';
import Options from 'views/options/OptionsContainer.jsx';
import ShowOptionsButton from 'ui/show-options-button/ShowOptionsButton.jsx';
import Pad from './Pad.jsx';
import style from './Pads.scss';


/**
 * Pads component
 * @param {Object} props - The component's props
 * @returns {ReactElement} - The component
 */
const Pads = (props) => {
  const state = props.mainState;
  const currentOctave = state.currentOctave;
  const sound = state.currentSound;
  const soundData = {
    title: 'Sound',
    stateProperty: 'currentSound',
    action: props.actions.changeSound,
    options: config.sounds,
  };

  const octaveData = {
    title: 'Octave',
    stateProperty: 'currentOctave',
    action: props.actions.changeOctave,
    options: config.padOctaves,
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
  const renderPads = () => {
    const pads = [];
    const octaveNotes = config.noteFrequencies.octaves[currentOctave.value];

    Object.keys(octaveNotes).forEach((key, index) => {
      const frequency = octaveNotes[key];

      pads.push(
        <Pad
          audioContext={props.audioContext}
          frequency={frequency}
          key={`pad-${key}`}
          index={index}
          sound={sound}
        />,
      );
    });

    return pads;
  };


  /**
   * Renders component
   * @return {ReactElement} - The component
   */
  return (
    <div className={style.wrapper}>
      <ShowOptionsButton clickHandler={showOptions} />
      <div className={style.padsWrapper}>
        {renderPads()}
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
Pads.propTypes = {
  actions: PropTypes.object.isRequired,
  audioContext: PropTypes.object.isRequired,
  mainState: PropTypes.object.isRequired,
};

export default Pads;
