export default {
  title: 'Rollup Docs ',
  description: 'compile JS code',
  themeConfig: {
    logo: '/guide/rollup-logo.svg',
    nav: [
      { text: 'guide', link: '/guide/' },
      { text: 'repl', link: 'https://rollupjs.org/repl/' },
      { text: 'chat', link: 'https://is.gd/rollup_chat' },
      { text: 'github', link: 'https://github.com/rollup/rollup' },
      { text: 'opencollective', link: 'https://opencollective.com/rollup' },
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          {
            text: 'Introduction',
            link: '/guide/introduction',
          },
          {
            text: 'Command line interface',
            link: '/guide/command-line-interface',
          },
          {
            text: 'Javascript API',
            link: '/guide/javascript-api',
          },
          {
            text: 'ES Module Syntax',
            link: '/guide/es-module-syntax',
          },
        ],
      },

      {
        text: 'More info',
        items: [
          {
            text: 'Tutorial',
            link: '/guide/tutorial',
          },
          {
            text: 'Plugin development',
            link: '/guide/plugin-development',
          },
          {
            text: 'Frequently Asked Questions',
            link: '/guide/faqs',
          },
          {
            text: 'Tools',
            link: '/guide/tools',
          },
          {
            text: 'Big list of options',
            link: '/guide/big-list-of-options',
          },
        ],
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
};
