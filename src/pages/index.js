import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to={`/docs/${customFields.introDocId}`}
          >
            How it works
          </Link>
          <div className={styles.buttonSpacer}></div>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/marketplace/motionlink"
          >
            Install
          </Link>
        </div>
        <div className={styles.buttons}>
          
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`MotionLink`}
      description="Publish content to your blog, portfolio and doc websites from Notion"
      image="img/logo400.png"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
