import React from "react";
import Link from "@docusaurus/Link";

import Layout from "@theme/Layout";
import { useWindowSize } from "../hooks/use_window_size";

export default function Market() {
  return (
    <Layout
      title={`MotionLink installable sites`}
      description="Install websites on Notion with just a click of a button."
      image="img/install-site.png"
    >
      <div className="container">
        <h2>Website installs are now available</h2>
        <p>
          You can now install websites on Notion with MotionLink. Get a website from the{" "}
          <a href="https://github.com/oreal-solutions/motionlink-websites/blob/main/README.md" target="_blank">
            Template Store
          </a>
          , Install it and manage it from Notion. <Link to="/docs/Installing%20websites" >This tutorial</Link> shows how to install a website.
        </p>
      </div>
    </Layout>
  );
}
