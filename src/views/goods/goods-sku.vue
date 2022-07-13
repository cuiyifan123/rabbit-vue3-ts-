<!-- <script setup lang="ts" name="GoodsSku"></script> -->
<!-- <template>
    <div class="goods-sku">
        <dl >
            <dt>颜色</dt>
            <dd>
                <img class="selected" src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png"
                    alt="" />
                <img class="disabled" src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png"
                    alt="" />
            </dd>
        </dl>
    </div>
</template> -->
<script setup lang="ts" name="GoodsSku">
import { GoodsInfo, Spec, SpecValue } from '@/types/response'

defineProps<{
    goods: GoodsInfo
}>()

/**
 * 选中规格
 * @param item
 * @param sub
 */
const changeSelected = (item: Spec, sub: SpecValue) => {
    item.values.forEach(i => i.selected = false)
    sub.selected = true
}
</script>
<template>
    <div class="goods-sku">
        <dl v-for="item in goods.specs" :key="item.name">
            <dt>{{ item.name }}</dt>
            <dd>
                <template v-for="sub in item.values" :key="sub.name">
                    <img v-if="sub.picture" :src="sub.picture" :class="{ selected: sub.selected }" alt=""
                        :title="sub.name" @click="changeSelected(item, sub)" />
                    <span v-else :class="{ selected: sub.selected }" @click="changeSelected(item, sub)">
                        {{ sub.name }}
                    </span>
                </template>
            </dd>
        </dl>
    </div>
</template>
<style scoped lang="less">
.sku-state-mixin () {
    border: 1px solid #e4e4e4;
    margin-right: 10px;
    cursor: pointer;

    &.selected {
        border-color: @xtxColor;
    }

    &.disabled {
        opacity: 0.6;
        border-style: dashed;
        cursor: not-allowed;
    }
}

.goods-sku {
    padding-left: 10px;
    padding-top: 20px;

    dl {
        display: flex;
        padding-bottom: 20px;
        align-items: center;

        dt {
            width: 50px;
            color: #999;
        }

        dd {
            flex: 1;
            color: #666;

            >img {
                width: 50px;
                height: 50px;
                margin-top: 5px;
                .sku-state-mixin ();
            }

            >span {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                padding: 0 20px;
                margin-top: 5px;
                .sku-state-mixin ();
            }
        }
    }
}
</style>
