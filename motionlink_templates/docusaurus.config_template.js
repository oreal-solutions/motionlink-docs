// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MotionLink",
  tagline:
    "Publish content to your blog, portfolio and doc websites from Notion",
  url: "https://motionlink.co/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "oreal-solutions", // Usually your GitHub org/user name.
  projectName: "motionlink-cli", // Usually your repo name.

  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "motionlink.co",
    },
  ],

  customFields: {
    introDocId: "{{{otherData.introDocId}}}",
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
      navbar: {
        title: "MotionLink",
        items: [
          {
            type: "doc",
            docId: "{{{otherData.introDocId}}}",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          { to: "/pricing", label: "Pricing", position: "left" },
          { to: "/sites", label: "Websites", position: "left" },
          {
            href: "https://app.motionlink.co/",
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
                to: "/docs/{{{otherData.introDocId}}}",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Github",
              //   href: "https://github.com/oreal-solutions/motionlink-cli/discussions",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/orealmotionlink",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "Email Us",
                href: "mailto:info@motionlink.co",
              },
              {
                label: "Privacy Policy",
                href: "https://lytowl.com/privacy_policy.html",
              },
              {
                label: "Terms of Service",
                href: "https://lytowl.com/motionlink/terms_of_service.html",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lytowl.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
