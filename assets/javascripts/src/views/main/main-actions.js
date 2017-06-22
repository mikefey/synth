export const CHANGE_UI = 'CHANGE_UI';
export const CHANGE_OCTAVE = 'CHANGE_OCTAVE';
export const CHANGE_SOUND = 'CHANGE_SOUND';


/**
 * Dispatches action to change the current octave
 * @param {Number} octave - The octave to change to
 * @returns {Object} An action object
 */
export function changeUI(ui) {
  return { type: CHANGE_UI, ui };
}


/**
 * Dispatches action to change the current octave
 * @param {Number} octave - The octave to change to
 * @returns {Object} An action object
 */
export function changeOctave(octave) {
  return { type: CHANGE_OCTAVE, octave };
}


/**
 * Dispatches action to change the current octave
 * @param {Object} sound - An object holding the new sound data
 * @returns {Object} An action object
 */
export function changeSound(sound) {
  return { type: CHANGE_SOUND, sound };
}
