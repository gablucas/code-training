import React from 'react';
import styles from './MemoryGame.module.css';

const ChooseDifficult = ({ setDifficult, difficult, setStart }) => {

  return (
    <div className={styles.difficult}>
      <h1>Escolha uma dificuldade:</h1>
      <div className={styles.options}>
        <button onClick={() => setDifficult(6)}>Fácil</button>
        <button onClick={() => setDifficult(12)}>Médio</button>
        <button onClick={() => setDifficult(18)}>Dificíl</button>
        <button onClick={() => setDifficult(24)}>Muito Difícil</button>
        <button onClick={() => setDifficult(30)}>Você é humano?</button>
      </div>

      {difficult && <button onClick={() => setStart(true)} className={styles.start}>Iniciar</button>}
    </div>
  )
}

export default ChooseDifficult