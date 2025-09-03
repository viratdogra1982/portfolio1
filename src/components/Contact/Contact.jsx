import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0CsO_tze2y01VmO49_omt2QeO8HRVTolrA&s" width={50} height={50} alt="Email icon" />
          <a href="mailto: viratd918@gmail.com">Mail me </a>
        </li>
        <li className={styles.link}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllNbtXaEUaCuGkcHhD6Wqb7QzOD0KGeYgkw&s"
            width={50}
            height={50}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/virat-dogra-703986329/">linkedin.com/virat</a>
        </li>
        <li className={styles.link}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt-qLgdR7soXUIodE9XEX-h33KGMULx_1jw&s" width={50} height={50} alt="Github icon" />
          <a href="https://github.com/viratdogra1982">github.com/virat</a>
        </li>
      </ul>
    </footer>
  );
};
