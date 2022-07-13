<script lang="ts" setup name="XtxBanner">
import { ref, onMounted, onUnmounted } from 'vue'
import type { IBannerItem } from '@/types/response'
// reactivityTransform配置可以解构
const {
  slides,
  autoplay,
  duration = 2000
} = defineProps<{
  slides: IBannerItem[]
  duration?: number
  autoplay?: boolean
}>()
const active = ref(0)
const handleNext = () => {
  active.value++
  if (active.value >= slides.length) {
    active.value = 0
  }
}
const handlePrev = () => {
  active.value--
  if (active.value < 0) {
    active.value = slides.length - 1
  }
}


let timerId = -1
// 暂停
const stop = () => {
  clearInterval(timerId)
}
// 开始
const start = () => {

  if (!autoplay) return

  timerId = window.setInterval(() => {
    handleNext()
  }, duration)
}
// 用户点击小圆点，显示小圆点对应的图片
const handleIndicator = (index: number) => {
  active.value = index
}

// 离开页面后清除定时器
onUnmounted(() => {
  stop()
})
// 页面加载开始轮播
onMounted(() => {
  start()
})
</script>
<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body">
      <li :class="{ 'carousel-item': true, fade: active === index }" v-for="(item, index) in slides" :key="item.id">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="handlePrev"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;" class="carousel-btn next" @click="handleNext"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <span :class="{ active: active === index }" @mouseenter="handleIndicator(index)"
        v-for="(item, index) in slides"></span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
