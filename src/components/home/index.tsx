import * as React from 'react';
import { Link } from 'gatsby';

import InfoIcon from '../icons/InfoIcon';
import Layout from '../layout/layout';

import * as styles from './home.css';
import { Helmet } from 'react-helmet';

const pages = [
  {
    path: '/qr',
    title: 'QR code component',
    challengeUrl:
      'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
  },
];

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="An iOS engineer's attempts at learning web development."
        />
      </Helmet>
      <div className={styles.container}>
        <main role="main" className={styles.card}>
          <h1>Frontend Mentor Challenges</h1>
          <p>Hello! 👋</p>
          <p>
            These are my attempts at solving the challenges on{' '}
            <a href="https://www.frontendmentor.io/profile/commscheck">
              frontendmentor.io
            </a>
            .
          </p>
          <ul className={styles.menu}>
            {pages.map((page) => (
              <li key={page.path}>
                <Link to={page.path}>{page.title}</Link>
                <a
                  href={page.challengeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InfoIcon className={styles.infoIcon} />
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
