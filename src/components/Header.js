import React from 'react'
import styles from '../assets/styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        {/* Here will be my logo */}
        <h1>My portfolio</h1>
        <nav>
            <a href='https://github.com/meliphyra-ux'>About me</a>
            <a href='https://github.com/meliphyra-ux'>My projects</a>
            <a href='https://github.com/meliphyra-ux'>My contacts</a>
        </nav>
        <button>Burger</button>
    </header>
  )
}
