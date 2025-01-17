import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "latte and cat",
  description: "life is like a cup of latte, and cat will make it unlonely",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "orange4u",
    authorAvatar: "/head.png",
    lastUpdatedText: "最近更新",
    series: {
      "/docs/algo-challenge/": [
        {
          text: "编程导航算法通关村",
          children: ["/docs/algo-challenge/ch0-intro/intro", "/docs/algo-challenge/ch0-intro/warmup"]
        },
        {
          text: "第一关｜原来链表这么有用",
          children: ["/docs/algo-challenge/ch1-linklist/basic", "/docs/algo-challenge/ch1-linklist/hf-questions", "/docs/algo-challenge/ch1-linklist/ring"],
        },
        {
          text: "第二关｜反转链表",
          children: ["/docs/algo-challenge/ch2-reverselist/basic", "/docs/algo-challenge/ch2-reverselist/extension", "/docs/algo-challenge/ch2-reverselist/kgroup"],
        }
      ]
    },
    navbar: [
      { text: "首页", link: "/", icon: "Home" },
      { text: "分类", link: "/categories/qianduan/1/", icon: "Category" },
      { text: "标签", link: "/tags/qianduan/1/", icon: "Tag" },
      {
        text: "算法",
        icon: "ToolsAlt",
        children: [
          { text: "编程导航算法通关村", link: "/docs/algo-challenge/ch0-intro/intro" }
        ]
      },
      { text: '时间轴', link: '/timeline', icon: 'Time' },
      { text: '留言板', link: '/docs/message-board', icon: 'Chat' }
    ],
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'latteandcat/Blog',
        repoId: 'MDEwOlJlcG9zaXRvcnkyNTQwNzUxMTk=',
        category: 'Announcements',
        categoryId: 'DIC_kwDODyTg784CXXQ8',
        mapping: 'title',
        strict: '1',
        lang: 'zh-CN',
        crossorigin: 'anonymous'
      }
    }
  })
});
