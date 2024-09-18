import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Virat Dogra</h1>
        <p className={styles.description}>
        I’m an enthusiastic full-stack developer with hands-on experience in both frontend and backend. I’m eager to grow and learn more in this dynamic field. Feel free to reach out if you’d like to connect or collaborate!
        </p>
        <a  className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQFhGqDGtCVvXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726611221563?e=1732147200&v=beta&t=5oIB4F9yC76WW4dbl8vhBUWnAj4x_aczLVBmlOC3B_M"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
