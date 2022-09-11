import React from 'react'

export default function ContactBox({boxName, boxImg, boxDescription}) {
  return (
    <figure>
        <img src={boxImg} alt='' />
        <figcaption>{boxName}</figcaption>
        <p>{boxDescription}</p>
        <button>Contact me</button>
    </figure>
  )
}
