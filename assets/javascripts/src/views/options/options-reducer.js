import {
  SHOW_OPTIONS,
  HIDE_OPTIONS,
} from './options-actions';

export const initialState = {
  show: false,
};


/**
 * Pads reducer
 * @param {Object} state - The current Pads state
 * @returns {Object} The updated Pads state
 */
export default function padsReducer(state = initialState, action) {
  switch (action && action.type) {
    case SHOW_OPTIONS:

      return {
        ...state,
        show: true,
      };

    case HIDE_OPTIONS:

      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
}
