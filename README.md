# echarts-adaptive-plugin

![npm-version](https://flat.badgen.net/npm/v/echarts-adaptive-plugin) ![node-version](https://flat.badgen.net/npm/node/echarts-adaptive-plugin) ![npm-downloads](https://flat.badgen.net/npm/dw/echarts-adaptive-plugin) ![license](https://flat.badgen.net/npm/license/echarts-adaptive-plugin)

这是一个为 ECharts 图表提供自适应功能的插件。它可以监听一个元素的大小变化，并自动调整 ECharts 图表的大小，以确保图表在不同设备和屏幕尺寸下都能正常显示。

## 特性

- **自适应调整**：自动监听容器大小的变化，调整图表尺寸。
- **灵活配置**：支持自定义调整参数，以满足特定需求。
- **简单易用**：通过简单的配置即可实现图表的自适应功能。

## 安装

使用 npm 安装：

```bash
npm install echarts-adaptive-plugin
```

或者使用 yarn：

```bash
yarn add echarts-adaptive-plugin
```

## 使用方法

首先，确保你已经安装了 ECharts。

然后，你可以这样使用 `echarts-adaptive-plugin`：

```typescript
import * as echarts from 'echarts';
import { echartsAdaptive } from 'echarts-adaptive-plugin';

// 初始化 ECharts 实例
const echartsInstance = echarts.init(
  document.getElementById('your-chart-container')
);

// 获取需要监听大小变化的元素
const monitorContent = document.getElementById('your-chart-container');

// 确保 monitorContent 不为空
if (!monitorContent) {
  throw new Error(
    '监视内容的元素未找到，请确保元素ID正确且已经被加载到DOM中。'
  );
}

// 配置自适应插件
const destroyAdaptive = echartsAdaptive({
  echartsInstance,
  monitorContent: document.getElementById('your-chart-container'),
  handle: ({ echartsInstance, monitorContent }) => {
    // 可以在这里返回自定义的调整参数
    return {};
  }
});

// 当不再需要自适应功能时，可以调用返回的函数销毁监听
// destroyAdaptive();
```

## API

### echartsAdaptive(options)

#### options

- `echartsInstance`: `echarts.ECharts` - ECharts 实例。
- `monitorContent`: `HTMLElement` - 需要监听大小变化的元素。
- `handle?`: `(options: { echartsInstance: echarts.ECharts; monitorContent: HTMLElement; }) => object` - 可选的处理函数，用于返回自定义的调整参数。

## 开发

- 安装依赖：`npm install`
- 文档服务：`npm run dev`
- 构建项目：`npm run build`
- 发布项目：`npm run release`

## 许可证

MIT License

---

Made with ❤️ by [huyikai](https://github.com/huyikai)

希望这个插件能帮助你更轻松地实现 ECharts 图表的自适应布局！
