import { combineReducers } from 'redux';
import mainReducer from 'views/main/main-reducer';
import optionsReducer from 'views/options/options-reducer';
import addToHomescreenReducer from 'ui/add-to-homescreen/add-to-homescreen-reducer';

const reducer = combineReducers({
  mainState: mainReducer,
  optionsState: optionsReducer,
  addToHomescreenState: addToHomescreenReducer,
});

export default reducer;
