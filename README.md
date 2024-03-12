# echarts-adaptive-plugin

`echartsAdaptive` 方法提供了一个自适应的 ECharts 图表大小调整功能。它通过监听一个 HTML 元素（`monitorContent`）的大小变化，来自动调整 ECharts 实例的大小。

这个方法接受一个配置对象 `EchartsAdaptiveOptions`，其中包含三个关键属性：

- `echartsInstance`: 必须，指定要调整大小的 ECharts 实例。
- `monitorContent`: 必须，指定要监听大小变化的 HTML 元素。
- `handle`: 可选，一个函数，当 `monitorContent` 的大小变化时被调用，用于提供自定义的调整参数给 ECharts 实例的 `resize` 方法。

当 `monitorContent` 的大小发生变化时，如果提供了 `handle` 函数，则会调用该函数并将返回的对象作为参数传递给 `echartsInstance.resize` 方法，从而允许用户自定义图表的调整行为。如果没有提供 `handle` 函数，则直接调用 `echartsInstance.resize` 方法而不传递任何参数。

此方法返回一个函数，可以用来停止监听 `monitorContent` 的大小变化。

## 安装模块

```shell
npm i echarts-adaptive-plugin
```

## 引入模块

```js
import { echartsAdaptive } from 'echarts-adaptive-plugin';
```
