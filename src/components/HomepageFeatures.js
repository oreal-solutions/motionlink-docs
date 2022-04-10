import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/img_feat_easy_to_use.svg").default,
    description: (
      <>
        MotionLink is designed from the ground up to be easy to setup so you can
        quickly get your content out there.
      </>
    ),
  },
  {
    title: "Built for high traffic",
    Svg: require("../../static/img/img_feat_high_traffic.svg").default,
    description: (
      <>
        MotionLink can be integrated with any static site generator, allowing
        your webpages to be served at lightning speed with any hosting service.
      </>
    ),
  },
  {
    title: "Powered by Notion",
    Svg: require("../../static/img/img_feat_powered_by_notion.svg").default,
    description: (
      <>
        Publish your content from the same Notion app you use to manage your
        work and personal life. No need for a third-party CMS.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
