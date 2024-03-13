class MockResizeObserver {
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
      this.elements = this.elements.filter(element => element !== target);
    }
  
    disconnect() {
      this.elements = [];
    }
  }
  
  // 将 MockResizeObserver 设置为全局可用
  global.ResizeObserver = MockResizeObserver;