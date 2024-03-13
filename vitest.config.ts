import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      'packages/**/*.{test,spec}.{ts,tsx}',
      'src/**/*.{test,spec}.{ts,tsx}'
    ],
    // 使用正则表达式排除不需要测试的文件和目录
    exclude: [
      '**/node_modules/**',
      '**/lib/**', // 排除整个lib目录
      '**/*.min.js' // 排除所有.min.js文件
    ],
    // 使用环境
    environment: 'jsdom',
    setupFiles: ['./packages/echarts-adaptive-plugin/test/setup.ts']
  }
});
