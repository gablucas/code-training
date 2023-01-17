import React from 'react';
import {Route, Routes } from 'react-router-dom';

// Import Projects
import MemoryGame from './Projects/MemoryGame/MemoryGame'
import ShowProjects from './Projects/ShowProjects';

const Projects = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<ShowProjects />} />
        <Route path='/memory-game' element={<MemoryGame />} />
      </Routes>

    </section>
  )
}

export default Projects