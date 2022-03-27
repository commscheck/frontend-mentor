import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

import Layout from '../layout/layout';

import * as styles from './qr.css';

const QrComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>QR code component</title>
      </Helmet>
      <div className={styles.container}>
        <main role="main" className={styles.card}>
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
        </main>
      </div>
    </Layout>
  );
};

export default QrComponent;
