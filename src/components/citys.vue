<script lang="ts" setup name="XtxCitys">
import { ref } from 'vue';
// 选择的城市结果类型
export type CityResult = {
    provinceCode: string
    provinceName: string
    cityCode: string
    cityName: string
    countyCode: string
    countyName: string
}

defineProps<{
    userAddress?: string
}>()
// 城市列表类型
type AreaList = {
    code: string
    level: number
    name: string
    areaList: AreaList[]
}
const active = ref(false)
const citys = ref<AreaList[]>([])
let cacheCitys = [] as AreaList[]
async function getCitys() {
    const res = await fetch('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json').then(res => res.json())
    citys.value = res as AreaList[]
    cacheCitys = res as AreaList[]
}

getCitys()

const emits = defineEmits<{
    (e: 'changeCity', value: CityResult): void
}>()
const citysResult = ref<CityResult>({} as CityResult)

const selectCity = (city: AreaList) => {
    switch (city.level) {
        case 0: {
            citysResult.value.provinceName = city.name
            citysResult.value.provinceCode = city.code
        }
            break;
        case 1: {
            citysResult.value.cityName = city.name
            citysResult.value.cityCode = city.code
        }
            break;
        case 2: {
            citysResult.value.countyName = city.name
            citysResult.value.countyCode = city.code
            emits('changeCity', citysResult.value)
        }
        default:
            break;
    }
    if (!city.areaList) return active.value = false
    citys.value = city.areaList
}



</script>
<template>
    <div class="xtx-city">
        <div class="select" @click="active = !active" :class="{ active: active }">
            <span v-if="!userAddress" class="placeholder">请选择配送地址</span>
            <span v-else class="value">{{ userAddress }}</span>
            <i class="iconfont icon-angle-down"></i>
        </div>
        <div class="option" v-show="active">
            <span class="ellipsis" v-for="item in citys" @click="selectCity(item)" :key="item.name">{{ item.name
            }}</span>
        </div>
    </div>
</template>

<style scoped lang="less">
.xtx-city {
    display: inline-block;
    position: relative;
    z-index: 400;

    .select {
        border: 1px solid #e4e4e4;
        height: 30px;
        padding: 0 5px;
        line-height: 28px;
        cursor: pointer;

        &.active {
            background: #fff;
        }

        .placeholder {
            color: #999;
        }

        .value {
            color: #666;
            font-size: 12px;
        }

        i {
            font-size: 12px;
            margin-left: 5px;
        }
    }

    .option {
        width: 542px;
        border: 1px solid #e4e4e4;
        position: absolute;
        left: 0;
        top: 29px;
        background: #fff;
        min-height: 30px;
        line-height: 30px;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;

        >span {
            width: 130px;
            text-align: center;
            cursor: pointer;
            border-radius: 4px;
            padding: 0 3px;

            &:hover {
                background: #f5f5f5;
            }
        }
    }
}
</style>