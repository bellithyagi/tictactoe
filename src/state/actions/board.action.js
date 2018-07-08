import { ACTION_CHANGE_PLAYER, ACTION_CURRENT_SQUARE_FILLED, ACTION_DECLARE_WINNER } from './constants';

export const changePlayer = value => ({
    payload: value,
    type: ACTION_CHANGE_PLAYER,
});

export const getClickedSquareNumber = value => ({
    payload: value,
    type: ACTION_CURRENT_SQUARE_FILLED,
})

export const getWinner = value => ({
    payload: value,
    type: ACTION_DECLARE_WINNER
});