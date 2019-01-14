import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';

class Game extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        move: PropTypes.bool.isRequired,
        desc: PropTypes.bool.isRequired,
        row: PropTypes.string.isRequired,
        col: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    row: 0,
                    col: 0,
                }
            ],
            stepNumber: 0,
            xIsNext: true,
        };
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        let row = Math.floor(i / 3) + 1;
        let col = (i % 3) + 1;

        this.setState({
            history: history.concat([
                {
                    squares: squares,
                    row: row,
                    col: col,
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });         
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 
                'Go to move #' + move :
                'Go to game start';

            return (
                <History 
                    move={move}
                    desc={desc}
                    row={step.row}
                    col={step.col} 
                    jumpTo={this.jumpTo}
                />
                // <li key={move}>
                //     <button onClick={() => this.jumpTo(move)}>{desc}</button> ({step.row},{step.col})
                // </li>
            );
        });

        let currentMove = moves[this.state.stepNumber];

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else if (this.state.stepNumber === 9) {
            status = 'Game has ended in a draw'; 
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
        }

        return (
            <div className="game">
                <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)} 
                />
                </div>
                    <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;