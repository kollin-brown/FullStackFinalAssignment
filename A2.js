
import React, { useState } from 'react';
//import './src/A2style.js'; // Import your stylesheet
import styles from './A2style.js';
import Board from './Board.js';


const TicTacToe = () => {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const winner = checkWinner();
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const nextPlayer = player === 'X' ? 'O' : 'X';
    setPlayer(nextPlayer);

    
    if (winner) {
      setWinner(winner);
    }
  };

  const handleReset = () => {
    setPlayer('X');
    setBoard(Array(9).fill(''));
    setWinner(null);
  };

  return (
    <main className={styles.background}> {/* Corrected className */}
      <section className={styles.title}>
        <h1>Tic Tac Toe</h1>
      </section>
      <section className={styles.display}>
        Player <span className={`${styles.displayPlayer} ${styles[`player${player.toLowerCase()}`]}`}>{player}</span>'s turn
      </section>
      <div>
      
        <section style={styles.container} board={Board} onClick={handleClick}> 
               
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        <button class="tile" onClick={handleClick}>  </button>
        
          
          
            


        
        
          
        
        
        
        </section>
        
            
      </div>
      <section className={`${styles.display} ${styles.announcer} ${winner ? '' : styles.hide}`}>{winner ? `${winner} wins!` : ''}</section>
      <section className={styles.controls}>
        <button style={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
      </section>
    </main>
  );
};
    
    // <main className="backround">
    //   <section className="title">
    //     <h1>Tic Tac Toe</h1>
    //   </section>
    //   <section className="display">
    //     Player <span className={`display-player player${player.toLowerCase()}`}>{player}</span>'s turn
    //   </section>
    //   <div>
      
    //   <div style={tile}>
       
    //     <section className="container">
    //       {board.map((value, index) => (
    //         <div className="container"  key ={index} onClick={() => handleClick(index)}>
    //           {board.value}
    //         </div>
    //       ))}
    //     </section>
    //     </div>
        
    //   </div>
    //   <section className={`display announcer ${winner ? '' : 'hide'}`}>{winner ? `${winner} wins!` : ''}</section>
    //   <section className="controls">
    //     <button id="reset" onClick={handleReset}>
    //       Reset
    //     </button>
    //   </section>
    // </main> 
    
  //);
//};

export default TicTacToe;
