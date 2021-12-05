/**
 * Run this script with:
 *
 * @example
 * npx motionlink tutorials=<tutorials_link_access_key> blogPosts=<blog_posts_link_access_key>
 */

const markdownService = require("motionlink-cli/lib/services/markdown_service");
const ObjectTransformers = markdownService.ObjectTransformers;

/** @type {import("motionlink-cli/lib/models/config_models").TemplateRule[]} */
const rules = [
  // To build the articles
  {
    template: "motionlink_templates/tutorial_template.md",
    outDir: "docs",
    alsoUses: [],
    uses: {
      database: "tutorials",
      fetchBlocks: true,
      filter: {
        or: [
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },

      map: (page, context) => {
        page.otherData.rank = page.data.properties.Rank.number;

        // Assuming the title has no formatting.
        page._title = ObjectTransformers.transform_all(
          page.data.properties.Title.title
        );

        page.otherData.title =
          "# " +
          ObjectTransformers.transform_all(page.data.properties.Title.title);

        page.otherData.content = context.genMarkdownForBlocks(page.blocks);

        return page;
      },
    },
  },

  // To Capture the getting started Tutorial page in the docusaurus.config.js file
  {
    template: "motionlink_templates/docusaurus.config_template.js",
    outDir: ".",
    alsoUses: [],
    uses: {
      database: "tutorials",
      fetchBlocks: false,
      filter: {
        or: [
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },
      sort: [
        {
          property: "Rank",
          direction: "ascending",
        },
      ],
      takeOnly: 1,

      map: (page, _) => {
        // Assuming the title has no formatting.
        page.otherData.introDocId = ObjectTransformers.transform_all(
          page.data.properties.Title.title
        );

        page._title = "docusaurus.config";
        return page;
      },
    },
  },

  // To build the blog posts
  {
    template: "motionlink_templates/blog_post_template.md",
    outDir: "blog",
    alsoUses: [],
    uses: {
      database: "blogPosts",
      fetchBlocks: true,
      filter: {
        or: [
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },

      map: (page, context) => {
        // Assuming the title has no formatting.
        page._title = ObjectTransformers.transform_all(
          page.data.properties.Title.title
        );

        page.otherData.titleText = ObjectTransformers.transform_all(
          page.data.properties.Title.title
        );

        page.otherData.content = context.genMarkdownForBlocks(page.blocks);

        return page;
      },
    },
  },
];

module.exports = rules;
