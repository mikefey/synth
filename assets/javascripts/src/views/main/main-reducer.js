import {
  CHANGE_UI,
  CHANGE_OCTAVE,
  CHANGE_SOUND,
} from './main-actions';

export const initialState = {
  currentOctave: 4,
  currentSound: 'sine',
  currentUI: 'keys',
};


/**
 * Pads reducer
 * @param {Object} state - The current Pads state
 * @returns {Object} The updated Pads state
 */
export default function padsReducer(state = initialState, action) {
  switch (action && action.type) {
    case CHANGE_UI:
      return {
        ...state,
        currentUI: action.ui,
      };

    case CHANGE_OCTAVE:
      return {
        ...state,
        currentOctave: action.octave,
      };

    case CHANGE_SOUND:
      return {
        ...state,
        currentSound: action.sound,
      };

    default:
      return state;
  }
}
