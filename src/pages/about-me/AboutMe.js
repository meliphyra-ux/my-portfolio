import React from "react";
import styles from "../../assets/styles/aboutme.module.css";
import avatar from "../../assets/images/avatar.jpg";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <article>
        <h2 className={styles.animation}>About me</h2>
        <p className={styles.animation}>
          Hello, I'm Nikita. 17 y.o. <br /> <span>Position</span>: Junior
          Frontend developer.
          <br />
          <span>Location</span>:{" "}
          <a href="https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.401699,30.252512,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234">
            Kyiv,Ukraine
          </a>
          . <br />
          <br />
          Would like to present you some of my works and projects and to
          recommend myself as a developer. Feel free to contact me, if you have
          some ideas or you want to have a chat with me
        </p>
        <button className={styles.animation}>My projects</button>
      </article>
      <img src={avatar} className={styles.animation} alt="My online avatar" />
    </section>
  );
}
