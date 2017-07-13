import { combineReducers } from 'redux';

import uiState from './ui-state.reducer';
import appState from './app-state.reducer';

const reducers = combineReducers({
  uiState,
  appState
});

export default reducers;
