import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/arumi/',
  title: "阿鲁米ARUMI",
  description: "A VitePress Site",
  themeConfig: {
      outline: {
			// level: [2,4], // 显示2-4级标题
			level: 'deep', // 默认显示2-6级标题
			label: '内容导航', // 大纲的标题
		},
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '玩家手册', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '基础知识', link: '/markdown-examples' },
          { text: '连接方式', link: '/markdown-examples' },
          { text: 'DIY工具', link: '/markdown-examples' },
          { text: '配件库', link: '/markdown-examples' },
          { text: '技巧', link: '/markdown-examples' },
          { text: '参考资料', link: '/markdown-examples' },
          { text: '案例分享', link: '/api-examples' }
        ]
      },
      {
        text: '认识铝型材',
        collapsed: false,
        items: [
          { text: '基础知识', link: '/markdown-examples' },
          { text: '连接方式', link: '/markdown-examples' },
          { text: 'DIY工具', link: '/markdown-examples' },
          { text: '配件库', link: '/markdown-examples' },
          { text: '技巧', link: '/markdown-examples' },
          { text: '参考资料', link: '/markdown-examples' },
          { text: '案例分享', link: '/api-examples' }
        ]
      },
      {
        text: '连接方式',
        collapsed: false,
        items: [
          { text: '基础知识', link: '/markdown-examples' },
          { text: '连接方式', link: '/markdown-examples' },
          { text: 'DIY工具', link: '/markdown-examples' },
          { text: '配件库', link: '/markdown-examples' },
          { text: '技巧', link: '/markdown-examples' },
          { text: '参考资料', link: '/markdown-examples' },
          { text: '案例分享', link: '/api-examples' }
        ]
      },
      {
        text: '工具',
        collapsed: false,
        items: [
          { text: '基础知识', link: '/markdown-examples' },
          { text: '连接方式', link: '/markdown-examples' },
          { text: 'DIY工具', link: '/markdown-examples' },
          { text: '配件库', link: '/markdown-examples' },
          { text: '技巧', link: '/markdown-examples' },
          { text: '参考资料', link: '/markdown-examples' },
          { text: '案例分享', link: '/api-examples' }
        ]
      },
      {
        text: '技巧',
        collapsed: false,
        items: [
          { text: '参考资料', link: '/markdown-examples' },
          { text: '案例分享', link: '/api-examples' }
        ]
      },
      {
        text: '案例',
        collapsed: false,
        items: [
          { text: '参考资料', link: '/markdown-examples' },
          { text: '案例分享', link: '/api-examples' }
        ]
      }
    ],

//    右上角社交链接配置
//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]

//    底部配置
    footer: {
      copyright: "copyright © 2024 阿鲁米ARUMI",
    },
//    搜索栏配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }         
    },
}
}
)
