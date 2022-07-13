<script lang="ts" setup name="HomePanel">
interface IProps {
    title: string
    subTitle?: string
}
defineProps<IProps>()
</script>

<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <h3>{{ title }}<small>{{ subTitle }}</small></h3>
                <!-- 具名插槽 -->
                <slot name="right"></slot>
            </div>
            <!-- 默认插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="less">
.home-panel {
    background-color: #fff;
    margin: 0 auto;

    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;

        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;

            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>