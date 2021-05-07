import { combineReducers } from 'redux';

import movies from './movies/reducer';
import ui from './ui/reducer';

export default combineReducers({
  movies,
  ui,
});
