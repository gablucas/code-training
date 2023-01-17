import React from 'react'
import Head from '../../Helper/Head';
import ChooseDifficult from './ChooseDifficult';
import DisplayGame from './DisplayGame';

const MemoryGame = () => {
  const [difficult, setDifficult] = React.useState(null);
  const [start, setStart] = React.useState(false);

  return (
    <>
    <Head title='Jogo da Memória' />
      {!start && <ChooseDifficult setDifficult={setDifficult} difficult={difficult} setStart={setStart}/>}
      {start && <DisplayGame difficult={difficult} />}
    </>
  )
}

export default MemoryGame