import React from "react";
import linkedIn from "../../assets/images/linkedin.png";
import telegram from "../../assets/images/telegram.png";
import mail from "../../assets/images/mail.png";
import styles from "../../assets/styles/mycontacts.module.css";
import ContactBox from "../../components/ContactBox";

export default function MyContacts() {
  return (
    <section className={styles.myContacts}>
        <h2>Get in touch with me using:</h2>
        <div>
          <ContactBox
            boxName="LinkedIn"
            boxImg={linkedIn}
            boxDescription="With over 750 millions of users, might be the most recognizable job finding website in the world"
          />
          <ContactBox 
            boxName="Telegram"
            boxImg={telegram}
            boxDescription="Cloud-based mobile and desktop messaging app with a focus on security and speed."
          />
          <ContactBox 
            boxName="Email"
            boxImg={mail}
            boxDescription="If you want, feel free to get in touch with me by... gold & old email"
          />
        </div>
    </section>
  );
}
