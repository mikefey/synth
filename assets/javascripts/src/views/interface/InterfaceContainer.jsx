import { connect } from 'react-redux';
import Interface from './Interface.jsx';


/**
 * Returns the Main state
 * @return {Object} - The Main state
 */
function mapStateToProps(state) {
  const { mainState } = state;

  return { mainState };
}


export default connect(mapStateToProps, null)(Interface);
