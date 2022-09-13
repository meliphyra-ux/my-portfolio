import React, {useState} from 'react'
import styles from '../assets/styles/header.module.css'
import menu from '../assets/images/menu.png'
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  return (
    <header className={styles.header}>
        {/* Here will be my logo */}
        <h1>My portfolio</h1>
        <nav className={toggleNavigation === true ? styles.active : ""}>
            <Link to='/'>About me</Link>
            <a href='https://github.com/meliphyra-ux' target="_blank" rel="noreferrer">My projects</a>
            <Link to='/my-contacts'>My contacts</Link>
        </nav>
        <img src={menu} onClick={()=>setToggleNavigation(!toggleNavigation)} alt="burger icon"/>
    </header>
  )
}
