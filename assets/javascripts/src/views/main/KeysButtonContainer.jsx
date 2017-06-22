import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeUI,
  changeOctave,
} from 'views/main/main-actions';
import KeysButton from './KeysButton.jsx';


/**
 * Returns the Pads state
 * @return {Object} - The Pads state
 */
function mapStateToProps(state) {
  const { mainState } = state;

  return { mainState };
}


/**
 * Creates an object with action dispatch functions
 * @return {Object} - An object containing action functions to dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      changeUI,
      changeOctave,
    }, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(KeysButton);
