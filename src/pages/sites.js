import React from "react";

import Layout from "@theme/Layout";
import { useWindowSize } from "../hooks/use_window_size";

export default function Market() {
  return (
    <Layout
      title={`MotionLink installable sites`}
      description="RIP to manual configurations. Install websites on Notion with just a clik of a button."
      image="img/install-site.png"
    >
      <main>
        <iframe
          title="waiting list form"
          height="700px"
          width="100%"
          src="https://cdn.forms-content.sg-form.com/9cc2e0f5-5124-11ed-8adf-0a2928bda8e8"
        />
      </main>
    </Layout>
  );
}
