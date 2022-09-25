import React from 'react'
import styles from '../assets/styles/mycontacts.module.css'

export default function ContactBox({boxName, boxImg, boxDescription, boxURL}) {
  return (
    <figure className={styles.animatedFigures}>
        <img src={boxImg} alt='' />
        <figcaption>{boxName}</figcaption>
        <p>{boxDescription}</p>
        <button><a target="_blank" rel="noreferrer" href={boxURL}>Contact me</a></button>
    </figure>
  )
}
