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
                    to: 'docs/tutorial/create-account', // TODO bver replace with docs/tutorial and redirect from the redirect plugin
                    activeBasePath: "docs/tutorial",
                    label: 'First steps'
                },
                {
                    to: 'docs/renderer/embed-a-floor-plan',  // TODO bver replace with docs/renderer and redirect from the redirect plugin
                    activeBasePath: "docs/renderer",
                    label: 'Renderer'
                },
                {
                    to: 'docs/api/introduction',  // TODO bver replace with docs/api and redirect from the redirect plugin
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
                    {from: '/page/changelog', to: '/changelog'},

                    {from: "/docs/chart-reports", to: '/docs/api/chart-reports'},
                    {from: "/docs/update-channels-for-an-event", to: '/docs/api/update-channels-for-an-event'},
                    {from: "/docs/assign-objects-to-channels", to: '/docs/api/assign-objects-to-channels'},
                    {from: "/docs/colors", to: '/docs/renderer/colors'},
                    {from: "/docs/stylepreset", to: '/docs/renderer/stylepreset'},
                    {from: "/docs/colorscheme", to: '/docs/renderer/colorscheme'},
                    {from: "/docs/style", to: '/docs/renderer/style'},
                    {from: "/docs/chartstartnewsession", to: '/docs/renderer/chartstartnewsession'},
                    {from: "/docs/chartsetfilteredcategories", to: '/docs/renderer/chartsetfilteredcategories'},
                    {from: "/docs/chartlistselectedobjects", to: '/docs/renderer/chartlistselectedobjects'},
                    {from: "/docs/chartsetunavailablecategories", to: '/docs/renderer/chartsetunavailablecategories'},
                    {from: "/docs/chartsetavailablecategories", to: '/docs/renderer/chartsetavailablecategories'},
                    {from: "/docs/chartresetview", to: '/docs/renderer/chartresetview'},
                    {from: "/docs/categoryfilter", to: '/docs/renderer/categoryfilter'},
                    {from: "/docs/availablecategories", to: '/docs/renderer/availablecategories'},
                    {from: "/docs/selectableobjects", to: '/docs/renderer/selectableobjects'},
                    {from: "/docs/showsectionpricingoverlay", to: '/docs/renderer/showsectionpricingoverlay'},
                    {from: "/docs/filteredcategories", to: '/docs/renderer/filteredcategories'},
                    {from: "/docs/inputdevice", to: '/docs/renderer/inputdevice'},
                    {from: "/docs/seatrestrictedview", to: '/docs/renderer/seatrestrictedview'},
                    {from: "/docs/seatparent", to: '/docs/renderer/seatparent'},
                    {from: "/docs/objectdisplayobjecttype", to: '/docs/renderer/objectdisplayobjecttype'},
                    {from: "/docs/seatviewfromseaturl", to: '/docs/renderer/seatviewfromseaturl'},
                    {from: "/docs/seatcompanionseat", to: '/docs/renderer/seatcompanionseat'},
                    {from: "/docs/objectaccessible", to: '/docs/renderer/objectaccessible'},
                    {from: "/docs/rendered-chart-properties", to: '/docs/renderer/rendered-chart-properties'},
                    {from: "/docs/style-your-floor-plan", to: '/docs/renderer/style-your-floor-plan'},
                    {from: "/docs/mode", to: '/docs/embedded-designer/mode'},
                    {from: "/docs/openlatestdrawing", to: '/docs/embedded-designer/openlatestdrawing'},
                    {from: "/docs/ondesignerrenderingfailed", to: '/docs/embedded-designer/ondesignerrenderingfailed'},
                ],
                createRedirects: function (existingPath) {
                    if (existingPath.includes("/tutorial/")) {
                        return existingPath.replace("tutorial/", "tutorial-");
                    } else if (existingPath.includes("/renderer/")) {
                        return existingPath.replace("renderer/", "renderer-");
                    } else if (existingPath.includes("/api/")) {
                        return existingPath.replace("api/", "api-");
                    } else if (existingPath.includes("/event-manager/")) {
                        return existingPath.replace("event-manager/", "event-manager-");
                    } else if (existingPath.includes("/chart-manager/")) {
                        return existingPath.replace("chart-manager/", "chart-manager-");
                    } else if (existingPath.includes("/embedded-designer/")) {
                        return existingPath.replace("embedded-designer/", "embedded-designer-");
                    }
                },
            },
        ],
    ]
};
