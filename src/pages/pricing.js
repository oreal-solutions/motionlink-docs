import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./pricing.module.css";
import Link from "@docusaurus/Link";
import useScript from "../hooks/use_script";

function PlansGrid() {
  const [plans, setPlans] = useState([]);
  useEffect(async () => {
    const inPlans = await window.getLocalisedPlans();
    setPlans(inPlans);
  });

  return plans.length === 0 ? (
    <h2>Loading...</h2>
  ) : (
    <div className={`container ${styles.pricingContainer}`}>
      {plans.map((plan) => {
        const bill =
          plan.zarAmount === 0
            ? "Free"
            : `${plan.localPriceWithSymbol} billed monthly`;

        return (
          <div key={plan.name} className={styles.pricingCard}>
            <div className={styles.pricingCardContent}>
              <p className={styles.pricingCardTitleText}>{plan.name}</p>
              <p className={styles.pricingCardPriceText}>{bill}</p>
              <p className={styles.pricingCardDescriptionText}>
                {plan.description}
              </p>
              <Link
                className={` button--secondary ${styles.startPlanButton}`}
                to="https://console.motionlink.lytowl.com/billing"
              >
                Get started
              </Link>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Pricing() {
  const scriptStatus = useScript(
    "https://motionlink-pricing-localiser.web.app/main.js"
  );

  return (
    <Layout title={"Pricing Information"} description={"Pricing plans here"}>
      {scriptStatus === "ready" && <PlansGrid />}
    </Layout>
  );
}
