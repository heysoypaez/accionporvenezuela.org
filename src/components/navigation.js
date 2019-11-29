import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/nuestros-principios/">Nuestros Principios</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/tu-perspectiva/">Necesitamos tu perspectiva</Link>
      </li>
    </ul>
  </nav>
)
