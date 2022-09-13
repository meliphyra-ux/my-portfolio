import React from 'react'

export default function ContactBox({boxName, boxImg, boxDescription, boxURL}) {
  return (
    <figure>
        <img src={boxImg} alt='' />
        <figcaption>{boxName}</figcaption>
        <p>{boxDescription}</p>
        <button><a target="_blank" rel="noreferrer" href={boxURL}>Contact me</a></button>
    </figure>
  )
}
