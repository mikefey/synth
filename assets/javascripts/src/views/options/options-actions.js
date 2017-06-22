export const SHOW_OPTIONS = 'SHOW_OPTIONS';
export const HIDE_OPTIONS = 'HIDE_OPTIONS';

/**
 * Dispatches action to show the options
 * @returns {Object} An action object
 */
export function showOptions() {
  return { type: SHOW_OPTIONS };
}

/**
 * Dispatches action to hide the options
 * @returns {Object} An action object
 */
export function hideOptions() {
  return { type: HIDE_OPTIONS };
}
