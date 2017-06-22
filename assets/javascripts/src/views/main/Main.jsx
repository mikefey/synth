import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import config from 'config/config';
import Interface from 'views/interface/InterfaceContainer.jsx';
import PadsButton from './PadsButtonContainer.jsx';
import KeysButton from './KeysButtonContainer.jsx';
import Display from './DisplayContainer.jsx';
import style from './Main.scss';

const initialState = {
  mainState: {
    currentOctave: config.keyOctaves[1],
    currentSound: config.sounds[0],
    currentUI: 'keys',
  },
};
const store = createStore(reducers, initialState);

try {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  window.audioContext = new window.AudioContext();
} catch (e) {
  console.log('No Web Audio API support');
}

const audioContext = new window.AudioContext();


/**
 * The main app component
 * @returns {ReactElement} - The component
 */
const Main = () => {
  return (
    <Provider store={store}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <Display />
          <div className={style.uiButtons}>
            <PadsButton />
            <KeysButton />
          </div>
          <Interface
            audioContext={audioContext}
          />
        </div>
      </div>
    </Provider>
  );
};

export default Main;
