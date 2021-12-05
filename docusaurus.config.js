// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MotionLink",
  tagline:
    "Publish content to your blog, portfolio and doc websites from Notion",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "oreal-solutions", // Usually your GitHub org/user name.
  projectName: "motionlink-cli", // Usually your repo name.

  customFields: {
    introDocId: "Getting started",
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAnalytics: {
        trackingID: "G-V7RLV8MYRV",
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },

      navbar: {
        title: "MotionLink",
        items: [
          {
            type: "doc",
            docId: "Getting started",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/pricing", label: "Pricing", position: "left" },
          {
            href: "http://motionlink-aec23.web.app",
            label: "Console",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/Getting started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/oreal-solutions/motionlink-cli/discussions",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/orealmotionlink",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Email Us",
                href: "mailto:products@lytowl.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oreal Solutions.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
