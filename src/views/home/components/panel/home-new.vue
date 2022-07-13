<script setup lang="ts">
import { useLazyData } from '@/hooks/useLazyData';
import useRootStore from '@/store';
import HomePanel from '../home-panel.vue';
import HomeSkeleton from './home-skeleton.vue';
const { home } = useRootStore()

const target = useLazyData(home.getNewList, {
    stop: true
})
</script>
<template>
    <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <template #right>
            <XtxMore path="/" />
        </template>
        <Transition name="fade">
            <ul class="goods-list" v-if="home.newList.length">
                <li v-for="item in home.newList" :key="item.id">
                    <RouterLink to="/">
                        <img v-lazy="item.picture" alt="" />
                        <p class="name ellipsis">{{ item.desc }}</p>
                        <p class="price">&yen;{{ item.price }}</p>
                    </RouterLink>
                </li>
            </ul>
            <HomeSkeleton :count="4" v-else />
        </Transition>
    </HomePanel>
    <!-- <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱" v-else>
        <template #reight>
            <XtxMore path="/" />
        </template>
        <template #default>
            <ul class="goods-list">
                <li v-for="item in 4" :key="item">
                    <RouterLink to="/">
                        <xtx-skeleton width="306" height="406" animated></xtx-skeleton>
                    </RouterLink>
                </li>
            </ul>
        </template>
    </HomePanel> -->
</template>

<style scoped lang="less">
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;
        background: #f0f9f4;
        .hoverShadow();

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding: 12px 30px 0 30px;
            text-align: center;
        }

        .price {
            color: @priceColor;
        }
    }
}
</style>