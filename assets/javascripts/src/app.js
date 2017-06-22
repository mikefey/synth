import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import Underline from './views/main/Main.jsx';

(() => {
  const doc = document;
  const appContainer = doc.getElementsByClassName('app-container')[0];

  ReactDOM.render(
    <Underline />,
    appContainer,
  );

  if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
  }
})();
