import { connect } from 'react-redux';
import Display from './Display.jsx';


/**
 * Returns the Pads state
 * @return {Object} - The Pads state
 */
function mapStateToProps(state) {
  const { mainState } = state;

  return { mainState };
}


export default connect(mapStateToProps, null)(Display);
