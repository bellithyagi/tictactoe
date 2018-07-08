import { combineReducers } from 'redux';
import boardReducer from './board.reducer';

export default combineReducers({
    board: boardReducer,
});