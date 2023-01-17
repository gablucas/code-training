import React from 'react'
import ChooseDifficult from './ChooseDifficult';
import DisplayGame from './DisplayGame';

const MemoryGame = () => {
  const [difficult, setDifficult] = React.useState(null);
  const [start, setStart] = React.useState(false);

  return (
    <>
      {!start && <ChooseDifficult setDifficult={setDifficult} difficult={difficult} setStart={setStart}/>}
      {start && <DisplayGame difficult={difficult} />}
    </>
  )
}

export default MemoryGame