<template>
    <div class="top-category">
        <div class="container">
            <XtxBread>
                <XtxBreadItem to="/">首页</XtxBreadItem>
                <XtxBreadItem>{{ category.topCategory.name }}</XtxBreadItem>
            </XtxBread>
            <xtx-banner style="height:500px" :slides="home.bannerList" />
            <!-- 所有二级分类 -->
            <div class="sub-list">
                <h3>全部分类</h3>
                <ul>
                    <li v-for="item in topCategory.children" :key="item.id">
                        <a href="javascript:;">
                            <img v-lazy="item.picture">
                            <p>{{ item.name }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 分类关联商品 -->
            <!-- 分类关联商品 -->
            <div class="ref-goods" v-for="item in category.topCategory.children">
                <div class="head">
                    <h3>- {{ item.name }} -</h3>
                    <p class="tag">温暖柔软，品质之选</p>
                    <XtxMore />
                </div>
                <div class="body">
                    <GoodsItem v-for="goods in item.goods" :key="goods.id" :goods="goods" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import useRootStore from '@/store';
import { storeToRefs } from 'pinia';
import { watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router'
import GoodsItem from './components/goodsItem.vue'
const { category, home } = useRootStore()
const route = useRoute()
home.getBannerList()
// watch(() => route.params.id, () => {
//     if (route.fullPath === `/category/${route.params.id}`) {
//         category.findTopCategory(route.params.id as string)
//     }
// }, {
//     immediate: true
// })

watchEffect(() => {
    if (route.fullPath === `/category/${route.params.id}`) {
        category.findTopCategory(route.params.id as string)
    }
})

const { topCategory } = storeToRefs(category)
</script>

<style scoped lang="less">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;

                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: @xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 0 65px 30px;
        }
    }
}
</style>