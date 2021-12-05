/**
 * Run this script with:
 *
 * @example
 * npx motionlink tutorials=<tutorials_link_access_key> blogPosts=<blog_posts_link_access_key>
 */

const markdownService = require("motionlink-cli/lib/services/markdown_service");
const ObjectTransformers = markdownService.ObjectTransformers;

let handledFirstTutorial = false;

/** @type {import("motionlink-cli/lib/models/config_models").TemplateRule[]} */
const rules = [
  {
    template: "docs/tutorial_template.md",
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
      sort: [
        {
          property: "Rank",
          direction: "ascending",
        },
      ],

      map: (page, context) => {
        page.otherData.rank = page.data.properties.Rank.number;

        // First page is the introduction page. See sort criteria above.
        if (!handledFirstTutorial) {
          page._title = "intro";
          handledFirstTutorial = true;
        } else {
          // Assuming the title has no formatting.
          page._title = ObjectTransformers.transform_all(
            page.data.properties.Title.rich_text
          );
        }

        page.otherData.title =
          "# " +
          ObjectTransformers.transform_all(
            page.data.properties.Title.rich_text
          );

        page.otherData.content = context.genMarkdownForBlocks(page.blocks);

        return page;
      },
    },
  },
];

module.exports = rules;
