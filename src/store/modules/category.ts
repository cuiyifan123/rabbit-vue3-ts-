import { defineStore } from 'pinia'
import { getAllCategory, getSubCategory, getTopCategory } from '@/api/home'
import { topCategory } from '@/constants'
import type {
  ICategoryItem,
  SubCategory,
  TopCategory
} from '@/types/response.d'

// 商品分类数据没有回来的时候，使用默认数据
const defaultCategory = topCategory.map((item, index) => {
  return {
    name: item
  }
})
// export const useCategoryStore = defineStore('category', () => {
//   const list = ref<ICategoryItem[] | any[]>(defaultCategory)

//   const getCategory = async () => {
//     const res = await getAllCategory()
//     list.value = res.result
//   }
//   return { list, getCategory }
// })

export const useCategoryStore = defineStore('category', {
  state() {
    return {
      list: defaultCategory as ICategoryItem[],
      topCategory: {} as TopCategory,
      subCategory: {} as SubCategory
    }
  },
  actions: {
    async getAllCategory() {
      const res = await getAllCategory()
      this.list = res.result
    },
    async findTopCategory(id: string) {
      const res = await getTopCategory(id)
      this.topCategory = res.result
    },
    async getSubCategory(id: string) {
      const res = await getSubCategory(id)
      this.subCategory = res.result
    }
  }
})
