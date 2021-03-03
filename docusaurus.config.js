module.exports = {
  title: 'Seats.io',
  tagline: 'Developer documentation',
  url: 'https://seatsio.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'seatsio',
  projectName: 'seatsio.github.io',
  themeConfig: {
    algolia: {
      apiKey: '1697ee210aa8dadfcd94ee592de32299',
      indexName: 'seatsio',
    },
    navbar: {
      logo: {
        alt: 'Seats.io developer docs',
        src: 'img/seatsio-black.svg',
        href: '/docs/'
      },
      items: [
        {
          to: 'docs/tutorial/draw-a-floor-plan', // TODO bver replace with docs/tutorial and redirect from the redirect plugin
          activeBasePath: "docs/tutorial",
          label: 'First steps'
        },
        {
          to: 'docs/renderer/embed-a-floor-plan',  // TODO bver replace with docs/renderer and redirect from the redirect plugin
          activeBasePath: "docs/renderer",
          label: 'Renderer'
        },
        {
          to: 'docs/api/authentication',  // TODO bver replace with docs/api and redirect from the redirect plugin
          activeBasePath: "docs/api",
          label: 'API'
        },
        {
          label: "Tools",
          items: [
            {
              to: 'docs/event-manager/introduction',  // TODO bver replace with docs/api and redirect from the redirect plugin
              activeBasePath: "docs/event-manager",
              label: 'Event Manager'
            },
            {
              to: 'docs/chart-manager/introduction',  // TODO bver replace with docs/api and redirect from the redirect plugin
              activeBasePath: "docs/chart-manager",
              label: 'Chart Manager'
            },
            {
              to: 'docs/embedded-designer/introduction',  // TODO bver replace with docs/api and redirect from the redirect plugin
              activeBasePath: "docs/embedded-designer",
              label: 'Embedded Designer'
            },
          ]
        },
        {
          to: 'changelog/',
          activeBasePath: 'changelog',
          label: 'Changelog',
          position: 'right'
        },
        {
          to: 'https://support.seats.io/en/',
          label: 'Support',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} seats.io BV`,
    },
    colorMode: {
      disableSwitch: true,
    },
    hideableSidebar: false,
    prism: {
      additionalLanguages: ['csharp', 'ruby'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      // This plugin only generates redirects for production builds!
      // => yarn run build && yarn run serve
      {
        redirects: [
          {
            to: '/changelog',
            from: '/page/changelog'
          },
        ],
      },
    ],
  ]
};
