import React from "react";

import Layout from "@theme/Layout";
import { useWindowSize } from "../hooks/use_window_size";

export default function Market() {
  return (
    <Layout
      title={`MotionLink installable sites`}
      description="RIP to manual configurations. Install websites on Notion with just a click of a button."
      image="img/install-site.png"
    >
      <div className="container">
        <h2>Sites are now available</h2>
        <p>
          You can now install websites from the{" "}
          <a href="https://paystack.shop/motionlink-templates" target="_blank">
            Template Store
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}
