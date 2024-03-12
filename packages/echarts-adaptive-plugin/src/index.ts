import * as echarts from 'echarts';
interface EchartsAdaptiveOptions {
  echartsInstance: echarts.ECharts;
  monitorContent: HTMLElement;
  handle?: (options: {
    echartsInstance: echarts.ECharts;
    monitorContent: HTMLElement;
  }) => object;
}
export const echartsAdaptive = ({
  echartsInstance,
  monitorContent,
  handle
}: EchartsAdaptiveOptions) => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      // 当 monitorContent 大小变化时，调整ECharts图表的大小
      if (entry.target === monitorContent) {
        // 获取自定义调整参数
        const options = handle
          ? handle({ echartsInstance, monitorContent })
          : {};
        echartsInstance.resize({ ...options });
      }
    }
  });

  // 开始监听 monitorContent 的大小变化
  resizeObserver.observe(monitorContent);

  // 返回一个函数，用于销毁监听
  return () => {
    resizeObserver.unobserve(monitorContent);
  };
};
