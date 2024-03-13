import * as echarts from 'echarts';

import { describe, expect, it, vi } from 'vitest';

import { echartsAdaptive } from '../src/index';

describe('echartsAdaptive', () => {
  it('should call resize on echarts instance with custom options when monitorContent size changes and handle is provided', async () => {
    const mockEchartsInstance = {
      resize: vi.fn()
    };
    const monitorContent = document.createElement('div');
    const customOptions = { width: 'auto', height: 'auto' };

    const destroyAdaptive = echartsAdaptive({
      echartsInstance: mockEchartsInstance as unknown as echarts.ECharts,
      monitorContent,
      handle: () => customOptions
    });

    // 模拟 monitorContent 大小变化
    monitorContent.dispatchEvent(new Event('resize'));

    // 确保 echartsInstance 的 resize 方法被调用，并传入了自定义选项
    expect(mockEchartsInstance.resize).toHaveBeenCalledWith(customOptions);

    // 清理
    destroyAdaptive();
  });
});

describe('echartsAdaptive', () => {
  it('should call resize on echarts instance with empty options when monitorContent size changes and handle is not provided', async () => {
    const mockEchartsInstance = {
      resize: vi.fn()
    };
    const monitorContent = document.createElement('div');

    // 创建一个 ResizeObserver 来模拟 monitorContent 大小变化的监听
    global.ResizeObserver = class ResizeObserver {
      callback: ResizeObserverCallback;
      elements: Element[] = [];

      constructor(callback: ResizeObserverCallback) {
        this.callback = callback;
      }

      observe(target: Element) {
        this.elements.push(target);
        // 立即触发回调以模拟观察效果，这里可以根据需要调整
        this.callback([{ target } as ResizeObserverEntry], this);
      }

      unobserve(target: Element) {
        this.elements = this.elements.filter((element) => element !== target);
      }

      disconnect() {
        this.elements = [];
      }
    };

    const destroyAdaptive = echartsAdaptive({
      echartsInstance: mockEchartsInstance as unknown as echarts.ECharts,
      monitorContent
    });

    // 确保 echartsInstance 的 resize 方法被调用，并传入了空对象
    expect(mockEchartsInstance.resize).toHaveBeenCalledWith({});

    // 清理
    destroyAdaptive();
  });
});
