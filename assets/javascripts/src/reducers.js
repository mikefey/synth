import { combineReducers } from 'redux';
import mainReducer from 'views/main/main-reducer';
import optionsReducer from 'views/options/options-reducer';

const reducer = combineReducers({
  mainState: mainReducer,
  optionsState: optionsReducer,
});

export default reducer;
