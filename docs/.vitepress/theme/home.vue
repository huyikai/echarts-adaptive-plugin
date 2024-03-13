<script setup lang="ts">
import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
</script>
<template>
  <div class="hero">
    <img
      class="logo"
      src="/static/charts-logo.png"
      alt="echarts-adaptive-plugin"
    />
    <div class="name">echarts-adaptive-plugin</div>
    <div class="text">提供了 ECharts 图表自适应的功能</div>

    <div class="buttons">
      <VPButton
        tag="a"
        size="medium"
        theme="brand"
        text="Guide"
        href="/Guide/1.GettingStart.html"
      >
      </VPButton>
      <VPButton
        tag="a"
        size="medium"
        theme="brand"
        text="Example"
        href="/Guide/2.Example.html"
      >
      </VPButton>
      <VPButton
        tag="a"
        size="medium"
        theme="sponsor"
        text="Github"
        href="https://github.com/huyikai/echarts-adaptive-plugin"
      >
      </VPButton>
    </div>
  </div>
  <VPDoc />
</template>
<style>
.hero {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
}

.hero .logo {
  display: block;
  width: 300px;
}

.hero .name {
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.hero .text {
  color: var(--vp-c-text-2);
}

.hero .buttons {
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
}
</style>
