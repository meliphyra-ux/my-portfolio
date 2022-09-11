import React from 'react'
import linkedIn from '../../assets/images/linkedin.png'
import telegram from '../../assets/images/telegram.png'
import instagram from '../../assets/images/instagram.png'
import mail from '../../assets/images/mail.png'

export default function MyContacts() {
  return (
    <section>
        <article>
            <h2>Feel free to contact me using:</h2>
            <ul>
                <li>
                    <img src={linkedIn} />
                    <a href="">LinkedIn</a>
                </li>
                <li>
                    <img src={telegram} />
                    <a href="">Telegram</a>
                </li>
                <li>
                    <img src={instagram} />
                    <a href="">Instagram</a>
                </li>
                <li>
                    <img src={mail} />
                    <a href="">Email</a>
                </li>
            </ul>
        </article>
    </section>
  )
}
