<script lang="ts" setup name="Goods">
import useStore from '@/store'
import GoodsImage from './goods-image.vue'
import GoodsSku from './goods-sku.vue'
import { storeToRefs } from 'pinia'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import GoodsSales from './goods-sales.vue'
import GoodsName from './goods-name.vue'
const { goods } = useStore()
const route = useRoute()
watchEffect(() => {
    const id = route.params.id as string
    goods.getGoodsInfo(id)
})

const { info } = storeToRefs(goods)
</script>


<template>
    <div class="xtx-goods-page">
        <div class="container">
            <!-- 渲染 -->
            <div v-if="info.categories">
                <!-- 面包屑 -->
                <XtxBread>
                    <XtxBreadItem to="/">首页</XtxBreadItem>
                    <XtxBreadItem :to="`/category/${info.categories[1].id}`">
                        {{ info.categories[1].name }}
                    </XtxBreadItem>
                    <XtxBreadItem :to="`/category/sub/${info.categories[0].id}`">
                        {{ info.categories[0].name }}
                    </XtxBreadItem>
                    <XtxBreadItem>{{ info.name }}</XtxBreadItem>
                </XtxBread>
                <!-- 商品信息 -->
                <div class="goods-info">
                    <div class="media">
                        <GoodsImage v-if="info.mainPictures" :images="info.mainPictures"></GoodsImage>
                        <GoodsSales />
                    </div>
                    <div class="spec">
                        <GoodsName :goods="info" />
                        <GoodsSku :goods="info" />
                    </div>
                </div>
                <!-- 商品详情 -->
                <div class="goods-footer">
                    <div class="goods-article">
                        <!-- 商品+评价 -->
                        <div class="goods-tabs"></div>
                    </div>
                    <!-- 24热榜+专题推荐 -->
                    <div class="goods-aside"></div>
                </div>
            </div>

            <!-- 占位的 -->
            <div v-else>
                <!-- 面包屑 -->
                <XtxBread>
                    <XtxBreadItem to="/">首页</XtxBreadItem>
                </XtxBread>
                <!-- 商品信息 -->
                <div class="goods-info"></div>
                <!-- 商品详情 -->
                <div class="goods-footer">
                    <div class="goods-article">
                        <!-- 商品+评价 -->
                        <div class="goods-tabs"></div>
                    </div>
                    <!-- 24热榜+专题推荐 -->
                    <div class="goods-aside"></div>
                </div>
            </div>
            <!-- 商品信息 -->

        </div>
    </div>
</template>
<style scoped lang="less">
.goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
        width: 940px;
        margin-right: 20px;
    }

    .goods-aside {
        width: 280px;
        min-height: 1000px;
    }
}

.goods-tabs {
    min-height: 600px;
    background: #fff;
}

.goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
}

.goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
        width: 580px;
        height: 600px;
        padding: 30px 50px;
    }

    .spec {
        flex: 1;
        padding: 30px 30px 30px 0;
    }
}
</style>