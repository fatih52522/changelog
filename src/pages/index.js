import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import '../css/custom.css';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { Analytics } from "@vercel/analytics/next"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.taglineText"
            description="The tagline text displayed on the homepage">
            In this project, we will explain the latest changes in SCNX.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Intro">
            <Translate
              id="homepage.goToChangelogButton"
              description="Text for the 'Go to Changelog' button">
              Go to Changelog!
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Changelog - ${siteConfig.title}`}
      description={
        <Translate
          id="layout.homepageDescription"
          description="Description meta tag for the homepage">
          welcome to SCNX Changelog!
        </Translate>
      }>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}