module.exports = {
  title: 'SamuelServer',
  tagline: 'A server for everyone.',
  url: 'https://samuelserver.now.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SISBEST',
  projectName: 'serversite',
  themeConfig: {
    navbar: {
      title: 'SamuelServer',
      items: [
        {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
        },
        {
            to: 'blog',
            label: 'Blog', 
            position: 'left'
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Server',
          items: [
            {
              label: 'Rules',
              to: 'docs/rules',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SamuelServer Admins`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
