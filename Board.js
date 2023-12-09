// Board.js

import React from 'react';
import styles from './A2style.js'; // Import your stylesheet

const Board = ({ board, onClick }) => (
  <section className={styles.container}>
    {board.map((value, index) => (
      <button key={index} className={styles.tile} onClick={() => onClick(index)}>
        {value}
      </button>
    ))}
  </section>
);

export default Board;
