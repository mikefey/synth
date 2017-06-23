import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import config from 'config/config';
import AddToHomescreen from 'ui/add-to-homescreen/AddToHomescreenContainer.jsx';
import { showAddToHomescreen } from 'ui/add-to-homescreen/add-to-homescreen-actions';
import cookieHelper from 'lib/cookie/cookie-helper';
import deviceHelper from 'lib/device/device-helper';
import Interface from 'views/interface/InterfaceContainer.jsx';
import PadsButton from './PadsButtonContainer.jsx';
import KeysButton from './KeysButtonContainer.jsx';
import Display from './DisplayContainer.jsx';
import style from './Main.scss';

const deviceOS = deviceHelper.getMobileOperatingSystem();
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
 * Root component for the app
 */
class Main extends Component {
  /**
   * Show 'add to homescreen prompt' if the user is on a mobile device and
   * it hasn't already been viewed
   * @returns {ReactElement} The component
   */
  componentDidMount() {
    if ((deviceOS === 'iOS' || deviceOS === 'Android') &&
      !cookieHelper.getItem('add-to-homescreen-prompt-shown')) {
      store.dispatch(showAddToHomescreen(deviceOS));
    }
  }

  render() {
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
          <AddToHomescreen />
        </div>
      </Provider>
    );
  }
}

export default Main;
