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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
      // This plugin only generates redirects for production builds! So it doesn't work when running docs locally.
      {
        redirects: [
          {
            to: '/changelog',
            from: ['/page/changelog', '/page/changelog/'],
          },
        ],
      },
    ],
  ]
};
