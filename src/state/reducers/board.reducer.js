import { ACTION_CURRENT_SQUARE_FILLED, ACTION_DECLARE_WINNER } from '../actions/constants';

const initialState = {
    currentSquare: '',
    winner: '',
}

export default function boardReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_CURRENT_SQUARE_FILLED:
          return { ...state, currentSquare: action.payload};
        case ACTION_DECLARE_WINNER:
          return { ...state, winner: action.payload };
        default:
          return state;
    }
};