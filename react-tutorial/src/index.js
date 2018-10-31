import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
    <button 
        className={"square " + props.highlighted}  
        onClick={props.onClick}
        /*style={props.highlighted}*/ >
        {props.value}
    </button>
    );
}

function History(props) {
    return (
        <li key={props.move}>
            <button onClick={() => props.jumpTo(props.move)}>{props.desc}</button> ({props.row},{props.col})
        </li>
    );
}
  
class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
                // highlighted={()}
            />  
        );
    }
  
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
  
class Game extends React.Component {
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
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
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
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  function calculateWinner(squares) {
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

  function highlightSquare(Square) {
      
  }

  // TODO
    // * 1 Display the location for each move in the format (col, row) in the move history list.
    // 2 Bold the currently selected item in the move list.
    // 3 Rewrite Board to use two loops to make the squares instead of hardcoding them.
    // 4 Add a toggle button that lets you sort the moves in either ascending or descending order.
    // 5 When someone wins, highlight the three squares that caused the win.
    // * 6 When no one wins, display a message about the result being a draw.
  