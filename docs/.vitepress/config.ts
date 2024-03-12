import vitepressHelper, { config } from '@huyikai/vitepress-helper';

import { defineConfigWithTheme } from 'vitepress';

const vitepressHelperConfig = {
  directory: 'docs',
  collapsible: true
};
const vitepressConfig = {
  title: 'echarts-adaptive-plugin',
  description: 'echarts-adaptive-plugin.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] //浏览器标签icon
  ],
  themeConfig: {
    siteTitle: 'Echarts-Adaptive', //导航栏左侧名称
    // logo: '/static/charts-logo.png', //导航栏左侧头像
    outlineTitle: 'Catalog', //右侧 侧边栏标题
    // 导航栏
    nav: [
    
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huyikai/vitepress-helper' }
    ],
    // 文档页脚-上下页显示文字
    docFooter: {
      prev: 'Pervious',
      next: 'Next'
    }
  }
};

export default async () => {
  const instance: any = await vitepressHelper({
    ...vitepressHelperConfig,
    ...vitepressConfig
  });
  return defineConfigWithTheme({ extends: config, ...instance });
};
