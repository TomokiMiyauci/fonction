const title = ''
const description = ''
const name = 'TomokiMiyauci'
const baseUrl = `https://tomokimiyauci.github.io/${title}`
const baseHead = [
  ['link', { rel: 'shortcut icon', href: `${baseUrl}/favicon.ico` }],
  ['meta', { name: 'author', content: name }],
  ['meta', { name: 'copyright', content: `2021 ©${name}` }],
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:image', content: `${baseUrl}/logo.png` }],
  [
    'meta',
    {
      property: 'og:url',
      content: baseUrl
    }
  ],
  [
    'meta',
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  [
    'meta',
    {
      property: 'og:site_name',
      content: `${title} docs`
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  ['meta', { name: 'twitter:site', content: '@tomoki_miyauci' }]
]
module.exports = {
  title,
  description,

  base: `/${title}/`,

  locales: {
    '/': {
      lang: 'en-US',
      head: [
        ['meta', { property: 'og:description', content: description }],
        ...baseHead
      ]
    }
  },

  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/guide/', activeMatch: '^/guide' },
          {
            text: 'Release Notes',
            link: `https://github.com/${name}/${title}/blob/main/CHANGELOG.md`
          }
        ],
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/guide/': 'auto'
        }
      }
    },

    repo: `${name}/${title}`,
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',

    editLinks: true
  }
}
