import React from "react";
import Layout from "@theme/Layout";
import styles from "./pricing.module.css";
import Link from "@docusaurus/Link";

const plans = [
  {
    name: "Starter",
    description: "Create up to 1 link",
    bill: "Free",
  },
  {
    name: "Writer",
    description: "Create up to 10 links",
    bill: "R149 billed monthly",
  },
  {
    name: "Publisher",
    description: "Create up to 50 links",
    bill: "R599 billed monthly",
  },
];

export default function Pricing() {
  return (
    <Layout title={"Pricing Information"} description={"Pricing plans here"}>
      <div className={`container ${styles.pricingContainer}`}>
        {plans.map((plan) => (
          <div key={plan.name} className={styles.pricingCard}>
            <div className={styles.pricingCardContent}>
              <p className={styles.pricingCardTitleText}>{plan.name}</p>
              <p className={styles.pricingCardPriceText}>{plan.bill}</p>
              <p className={styles.pricingCardDescriptionText}>
                {plan.description}
              </p>
              <Link
                className={` button--secondary ${styles.startPlanButton}`}
                to="https://motionlink-aec23.web.app/billing"
              >
                Get started
              </Link>{" "}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
