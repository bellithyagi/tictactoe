import React from 'react';
import PropTypes from 'prop-types';
import Square from '../square/square.component';
import { connect } from 'react-redux';
import { getClickedSquareNumber, getWinner } from '../../state/actions/board.action';
import './board.css';

export const mapStateToProps = state => ({
    winner: state.board.winner,
});

const Board = ({
    getClickedSquareNumber,
    getWinner,
    winner,
}) => {
    const gameStatus = {
        playerTurn: 'X',
        board: Array(9).fill(''),
        gameBlocked: false,
        gameEnded: false,
        totalMoves: 0
    }
    
    const onclick = squareNumb => {
        getClickedSquareNumber(squareNumb.id);
        if(gameStatus.gameEnded || gameStatus.gameBlocked) return;
        if(gameStatus.board[squareNumb.id] === ''){
          gameStatus.board[squareNumb.id] = gameStatus.playerTurn;
          squareNumb.innerText = gameStatus.playerTurn;
          gameStatus.playerTurn = gameStatus.playerTurn === 'X' ? 'O' : 'X';
          gameStatus.totalMoves++;
        }
        console.log(gameStatus.board);
        let result = checkWinner();
        console.log(result);
        if(result === 'X') {
          gameStatus.gameEnded = true;
          getWinner(result);
        } else if(result === 'O') {
          gameStatus.gameEnded = true;
          getWinner(result);
        } else if(result === 'draw') {
          gameStatus.gameEnded = true;
          getWinner(result);
        }
    
        if(gameStatus.playerTurn === 'O' && !gameStatus.gameEnded) {
          gameStatus.gameBlocked = true;
          setTimeout(()=> {
            do {
              var random = Math.floor(Math.random()*9);
            } while(gameStatus.board[random] !== '');
              gameStatus.gameBlocked = false;
              onclick(document.querySelectorAll('.square')[random]);
            }, 1000);      
        }
    }
    
    const checkWinner = () => {
        var resultCombination = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
        var board = gameStatus.board;
        for(let i=0; i < resultCombination.length; i++) {
            if(board[resultCombination[i][0]] === board[resultCombination[i][1]] && board[resultCombination[i][1]] === board[resultCombination[i][2]]){
                return board[resultCombination[i][0]];
            }
        }
    
        if(gameStatus.totalMoves === 9) {
            return 'draw';
        }
    }

    const resetGame = () => {
        gameStatus.playerTurn = 'X';
        gameStatus.gameEnded = false;
        gameStatus.gameBlocked = false;
        gameStatus.board = Array(9).fill('');
        gameStatus.totalMoves = 0;
        const htmlElements = document.querySelectorAll('.square');
        for(let i=0; i < htmlElements.length; i++) {
            htmlElements[i].innerText = '';
        }
        getWinner('');
    }
  return (
    <div>
      <h3 className="text-center">Tic Tac Toe</h3>
      <div className="board" onClick={(event) => onclick(event.target)}>
        <Square id={0}/>
        <Square id={1}/>
        <Square id={2}/>
        <Square id={3}/>
        <Square id={4}/>
        <Square id={5}/>
        <Square id={6}/>
        <Square id={7}/>
        <Square id={8}/>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" type="button" onClick={resetGame}>New Game</button>
      </div>
      {(winner === 'X' || winner === 'O') && <h3 className="text-center wonTitle">{winner} won the game!</h3>}
      {(winner === 'draw') && <h3 className="text-center wonTitle">It's a draw!</h3>}
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
    getClickedSquareNumber: val => dispatch(getClickedSquareNumber(val)),
    getWinner: val => dispatch(getWinner(val)),
});

Board.propTypes = {
    getClickedSquareNumber: PropTypes.func,
    getWinner: PropTypes.func,
    winner: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);