module.exports = {
  title: '文档知识库',
  base: '/docs/',
  lastUpdated: 'Last Updated',
  themeConfig: {
    logo: "",
    sidebarDepth: 2,
    nav: [
      { text: '官网', link: 'https://kucodeai.com' },
      { text: '课程', link: 'https://courses.kucodeai.com' },
      { text: 'GitHub', link: 'https://github.com/kucodeai/' }
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ]
    }
  },
};