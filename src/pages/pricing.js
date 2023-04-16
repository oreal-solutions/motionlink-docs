import React from "react";
import Layout from "@theme/Layout";
import styles from "./pricing.module.css";
import Link from "@docusaurus/Link";

function PlansGrid() {
  return (
    <div className={`container ${styles.pricingContainer}`}>
      <div key="free" className={styles.pricingCard}>
        <div className={styles.pricingCardContent}>
          <p className={styles.pricingCardTitleText}>Free</p>
          <p className={styles.pricingCardPriceText}>$0</p>
          <p className={styles.pricingCardDescriptionText}>
            Unlimited links and usage while we're still building and experimenting.
          </p>
          <Link
            className={`button--secondary ${styles.startPlanButton}`}
            to="https://app.motionlink.co"
          >
            Get started
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <Layout title={"Pricing Information"} description={"Pricing plans here"}>
      <PlansGrid />
    </Layout>
  );
}
