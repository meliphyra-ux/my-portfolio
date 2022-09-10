import React, {useState} from 'react'
import styles from '../assets/styles/header.module.css'
import menu from '../assets/images/menu.png'

export default function Header() {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  return (
    <header className={styles.header}>
        {/* Here will be my logo */}
        <h1>My portfolio</h1>
        <nav className={toggleNavigation === true ? styles.active : ""}>
            <a href='https://github.com/meliphyra-ux'>About me</a>
            <a href='https://github.com/meliphyra-ux'>My projects</a>
            <a href='https://github.com/meliphyra-ux'>My contacts</a>
        </nav>
        <img src={menu} onClick={()=>setToggleNavigation(!toggleNavigation)} alt="burger icon"/>
    </header>
  )
}
