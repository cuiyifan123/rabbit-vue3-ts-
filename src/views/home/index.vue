<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>

    <!-- 新鲜好物 -->
    <HomeNew />

    <!-- 人气推荐 -->
    <HomeHot />

    <!-- 热门品牌-->
    <HomeBrand />
    <HomeProduct />
    <HomeSpecial />
  </div>
</template>

<script lang="ts" setup name="Home">
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue';
import HomeNew from './components/panel/home-new.vue';
import HomeHot from './components/panel/home-hot.vue';
import HomeBrand from './components/panel/home-brand.vue';
import HomeProduct from './components/panel/home-product.vue';
import HomeSpecial from './components/panel/home-special.vue';
</script>

<style lang="less">
</style>