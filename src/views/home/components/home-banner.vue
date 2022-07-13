<script lang="ts" setup>

import useRootStore from '@/store';
const { home } = useRootStore()
try {
  home.getBannerList()
} catch (e) {
  // 对错误做点什么
}
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <xtx-banner :slides="home.bannerList" autoplay />
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: pink;

  & :deep(.prev) {
    transform: translateX(250px);
  }

  & :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
