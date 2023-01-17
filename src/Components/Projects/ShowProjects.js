import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../Projects.module.css'

const ShowProjects = () => {
  return (
    <section className={styles.projects}>
      <Link to='/memory-game'>Memory Game</Link>
      <Link to='/empty'>Empty</Link>
      <Link to='/empty'>Empty</Link>
      <Link to='/empty'>Empty</Link>
      <Link to='/empty'>Empty</Link>
    </section>
  )
}

export default ShowProjects