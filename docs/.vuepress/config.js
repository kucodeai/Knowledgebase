module.exports = {
  title: '知识库',
  base: '/',
  lastUpdated: 'Last Updated',
  themeConfig: {
    logo: "/logo.png",
    sidebarDepth: 2,
    nav: [
      { text: '官网', link: 'https://kucodeai.com' },
      { text: '课程', link: 'https://courses.kucodeai.com' },
      { text: 'GitHub', link: 'https://github.com/kucodeai/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          {text: '简体中文',link:'/language/Chinese/'},
          {text: 'English',link: '/language/English'}
        ]
      }
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