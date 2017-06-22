import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  hideOptions,
} from 'views/options/options-actions';
import {
  changeOctave,
  changeSound,
} from 'views/main/main-actions';
import Options from './Options.jsx';


/**
 * Returns the Pads state
 * @return {Object} - The Pads state
 */
function mapStateToProps(state) {
  const { mainState, optionsState } = state;

  return { mainState, optionsState };
}


/**
 * Creates an object with action dispatch functions
 * @return {Object} - An object containing action functions to dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      hideOptions,
      changeOctave,
      changeSound,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
