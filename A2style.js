import React from "react";
const styles = {
    '*': {
      padding: 0,
      margin: 0,
      fontFamily: 'Arial, cursive',
    },
    background: {
      backgroundColor: 'blue',
      height: '100vh',
      paddingTop: '1px',
    },
    title: {
      color: 'white',
      textAlign: 'center',
      fontSize: '40px',
      marginTop: '10%',
    },
    display: {
      color: 'white',
      fontSize: '25px', // Corrected from '25xp' to '25px'
      textAlign: 'center',
      marginTop: '1em',
      marginBottom: 'auto', // Corrected from 'auto 1em' to 'auto'
    },
    hide: {
      display: 'none',
    },
    container: {
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '10px',
      maxWidth: '300px',
    },
    tile: {
      minWidth: '100px',
      minHeight: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '50px',
      cursor: 'pointer',
      backgroundColor: 'white',
    },
    playerX: {
      color: 'green',
    },
    playerO: {
      color: 'purple',
    },
    controls: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1em',
    },
    resetButton: {
      backgroundColor: 'red',
      color: 'white',
      padding: '8px', // Corrected from '8xp' to '8px'
      borderRadius: '8px', // Corrected from '8xp' to '8px'
      border: 'none',
      fontSize: '20px', // Corrected from '20xp' to '20px'
      marginLeft: '1em',
      cursor: 'pointer',
    },
  };
  
  export default styles;
  