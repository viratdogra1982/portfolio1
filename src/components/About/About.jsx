import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          width={50}
          height={250}
          src="https://cdn-icons-png.flaticon.com/512/7119/7119246.png"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
</li>

<div className={styles.aboutItemText}>
   <img
      src="https://copilot.microsoft.com/th/id/BCO.fe7bf228-68ce-4a5c-b9b9-007d20288521.png"
      width={90}
      height={90}
      alt="Cursor icon"
      className={styles.aboutItemImage}
    />
      <h1>Frontend Developer</h1>
      <h3>
        I'm a frontend developer with experience in building responsive
        and optimized sites
      </h3>
    </div>

          <div className={styles.aboutItemContent}>
    <img
      src="https://img.freepik.com/premium-vector/backend-icon_933463-10712.jpg"
      width={90}
      height={90}
      alt="Cursor icon"
      className={styles.aboutItemImage}
    />
    <div className={styles.aboutItemText}>
      <h2>Backend Developer</h2>
      <p>
        Backend development refers to the server-side logic and infrastructure that powers websites and applications behind the scenes.
      </p>
    </div>
  </div>
          <div className={styles.aboutItemContent}>
    <img
      src="https://img.freepik.com/premium-vector/backend-icon_933463-10712.jpg"
      width={90}
      height={90}
      alt="Cursor icon"
      className={styles.aboutItemImage}
    />
    <div className={styles.aboutItemText}>
      <h2>UI/UX DESIGNER</h2>
      <div>
        <div></div>
      <p>
       A UI/UX Designer is a creative professional who designs digital experiences that are both visually appealing and user-friendly.
      </p>
      </div>
    </div>
  </div>
        </ul>
      </div>
    </section>
  );
};
