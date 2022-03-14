import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../../components/layout/layout";

import * as styles from "./qr.css";

const QrComponent = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.card}>
          <StaticImage
            className={styles.cardImage}
            src="./image-qr-code.png"
            alt="A QR code pointing to https://frontendmentor.io"
            loading="eager"
          />
          <div className={styles.cardText}>
            <h1 className={styles.title}>
              Improve your front-end skills by building projects
            </h1>
            <p className={styles.body}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QrComponent;
