import React from 'react';
import styles from './MemoryGame.module.css';

// Cria os cards do game
function createCards(number) {
  const cards = [];

  for (let i = 1; i <= number ; i++) {
    cards.push(i);
    cards.push(i)
  }
  
  return cards.sort(() => Math.random() - 0.5)
}


const DisplayGame = ({ difficult }) => {
  const [cards, setCards] = React.useState(createCards(difficult))
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [score, setScore] = React.useState({
    hits: 0,
    misses: 0,
  });


  // Mostra os cards inicialmente por um breve tempo
  React.useEffect(() => {
    setTimeout(() => {
      const cardsElement = document.querySelectorAll('.selected');
      cardsElement.forEach((cardElement) => cardElement.classList.remove('selected'))
    }, 2000)
  }, [])
  

  // Exibe o card clicado e o armazena no estado setSelectedCard
  function handleClick({ currentTarget }) {
    // Só permite selecionar dois cards por vez e se o card ainda não foi selecionado
    if(selectedCard.length < 2 && !currentTarget.classList.contains('selected')) {
      currentTarget.classList.add('selected')
      setSelectedCard([...selectedCard, currentTarget.getAttribute('id')]);
    }
  }


  // Reinicia o jogo
  function restartGame() {
    setCards(createCards(difficult))
    setScore({
      hits: 0,
      misses: 0,
    })
    const cardsElement = document.querySelectorAll('[id^=card]');
    cardsElement.forEach((cardElement) => cardElement.classList.add('selected'));

    setTimeout(() => {
      cardsElement.forEach((cardElement) => cardElement.classList.remove('selected'));
    }, 2000)
  }


  React.useEffect(() => {
    // Verifica se foi selecionado dois cards
    if (selectedCard.length === 2) {
      
      // Pega o id dos cards, separa o index e o numero do card para validar
      const card1 = selectedCard[0].split('-');
      const card2 = selectedCard[1].split('-');

      // Verifica se ambos cards são diferentes
      // Primeiro compara se o index dos cards são diferentes
      // Depois verifica se o número dos cards são iguais
      if (card1[1] !== card2[1] && card1[2] === card2[2]) {
        setSelectedCard([]);
        setScore((score) => {
          return {
            ...score,
            hits: score.hits + 1,
          }
        })          
      } else {
        setTimeout(() => {
          selectedCard.forEach((card) => document.querySelector(`#${card}`).classList.remove('selected'));
          setSelectedCard([]);
          setScore((score) => {
            return {
              ...score,
              misses: score.misses + 1,
            }
          })
        }, 1000)
      }
    }
  }, [selectedCard])
  
  return (
    <div className={styles.display}>
      <div className={styles.scoreBoard}>
        <h1>Tentativas: {score.misses + score.hits}</h1>
        <h1>Erros: {score.misses}</h1>
        <h1>Acertos: {score.hits}</h1>
      </div>
      
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div onClick={handleClick} key={index} id={`card-${index}-${card}`} className={`${styles.card} selected`}>
            <span>{card}</span>
          </div>
        ))}

        {score.hits === difficult && <div className={styles.displayModal}>
          <button onClick={restartGame} className={styles.restart}>Jogar denovo</button>
        </div>}
      </div>

      
    </div>
  )
}

export default DisplayGame;