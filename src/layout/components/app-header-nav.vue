<script lang="ts" setup name="AppHeaderNav">
import useRootStore from '@/store'
import { ref } from 'vue'
const { category } = useRootStore()
try {
  // 页面进来请求nav数据
  category.getAllCategory()
} catch (e) {
  console.log(e)
}
// 判断是否有id，如果有id表示nav数据回来了，
// 允许用户点击跳转，没有回来用户点击跳转到首页
const isCategory = (id: string) => {
  if (id) {
    return `/category/${id}`
  } else {
    return '/'
  }
}

// 用来控制二级菜单的显示隐藏
const isShowId = ref('-1')

/**
 *  为什么要用一个变量来控制导航栏的高亮，而不是使用 router-link-active router-link-exact-active类名控制高亮?
 *      原因: 导航栏是数据是重后台获取来的，为了防止数据没有回来导致页面导航栏空白，所以使用了一个假数据，
 *  假数据没有对应的商品，所以router-link的path默认设置的都是 /，页面刷新数据没有回来，path都是 / 都是相同的，导致所有的 router-link都被选中，
 *  所以当前的情况下无法使用 router-link-active router-link-exact-active，所以使用变量来控制
 */
const active = ref('-1')
// 根据id来显示分类下面对应的商品信息
const show = (id: string) => {
  isShowId.value = id
}
// 当用户点击了之后改变active的值，来让li标签高亮
const isActive = (id: string) => {
  if (!id) return
  active.value = id
}
// const isActive = (id: string) => {
//   return id === active.value
// }
// 鼠标移除或点击，隐藏商品
const hide = () => {
  isShowId.value = '-1'
}
</script>

<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li v-for="item in category.list" @mouseleave="hide" @click="hide, isActive(item.id)" @mousemove="show(item.id)"
      :key="item.id" :class="{ isActive: item.id === active }">
      <router-link :to="isCategory(item.id)">{{ item.name }}</router-link>
      <div :class="{ layer: true, show: item.id === isShowId }" v-if="item.children">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <router-link :to="`/category/sub/${sub.id}`">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  >li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    &.isActive {
      >a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }

    >a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }

    // 新增样式
    &:hover {
      >a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}

// 新增样式
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.5s 0.1s;

  &.show {
    height: 132px;
    opacity: 1;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;

    li {
      width: 110px;
      text-align: center;

      img {
        width: 60px;
        height: 60px;
      }

      p {
        padding-top: 10px;
      }

      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
