const { members } = require('../../temp/fonction.api.json')
const { lowerCase } = require('fonction')

const title = 'fonction'
const description = 'A modern practical functional library'
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
          { text: 'API', link: '/api/', activeMatch: '^/api' },
          {
            text: 'Release Notes',
            link: `https://github.com/${name}/${title}/blob/main/CHANGELOG.md`
          }
        ],
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/guide/': 'auto',
          '/api': [
            {
              text: 'List of function',
              link: '/api/',
              children: members[0]?.members
                .filter((a) => a.kind === 'Variable')
                .map(({ name }) => {
                  const fName = name === 'length_2' ? 'length' : name
                  console.log(fName)
                  return {
                    text: fName,
                    link: `/api/${lowerCase(fName)}/`
                  }
                })
            }
          ]
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
