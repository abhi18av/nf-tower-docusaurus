module.exports = {
  title: "Nextflow Tower docs",
  tagline: "Deploy and manage complex pipelines on any infrastructure. Build better pipelines, reduce costs and improve time to results.",
  url: "https://help.tower.nf",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.white.png",
  organizationName: "seqeralabs",
  projectName: "nf-tower",
  themeConfig: {
     algolia: {
      apiKey: '23eec3013ea3a6941848e53e7e1c7af8',
      indexName: 'tower',
      contextualSearch: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Nextflow Tower logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/seqeralabs/nf-tower-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/seqeralabs",
            },
                        {
              label: "Blog",
              to: "https://www.seqera.io/blog",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/seqeralabs/nf-tower",
            },
          ],
        },
      ],
      copyright: `© 2018-${new Date().getFullYear()} Seqera Labs S.L. All rights reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/seqeralabs/nf-tower-docs/tree/master/content/docs",
      
          routeBasePath: '/'
          },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
