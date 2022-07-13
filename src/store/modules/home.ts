import { defineStore } from 'pinia'
import {
  getBannerList,
  getHotList,
  getNewList,
  getBrandList,
  getGoodsList,
  getSpecialList
} from '@/api/home'
import type {
  IBannerItem,
  INewList,
  IHotList,
  IBrandList,
  IGoodsItem,
  ISpecial
} from '@/types/response.d'

export const useHomeStore = defineStore('home', {
  state() {
    return {
      bannerList: [] as IBannerItem[],
      newList: [] as INewList[],
      hotList: [] as IHotList[],
      brandList: [] as IBrandList[],
      goodsList: [] as IGoodsItem[],
      specialList: [] as ISpecial[]
    }
  },
  actions: {
    async getBannerList() {
      const res = await getBannerList()
      this.bannerList = res.result
    },
    async getNewList() {
      const res = await getNewList()
      setTimeout(() => {
        this.newList = res.result
      }, 3000)
    },
    async getHotList() {
      const res = await getHotList()
      setTimeout(() => {
        this.hotList = res.result
      }, 3000)
    },
    async getBrandList() {
      const res = await getBrandList()
      this.brandList = [...res.result, ...res.result]
    },
    async getGoodsList() {
      const res = await getGoodsList()
      this.goodsList = res.result
    },
    async getSpecialList() {
      const res = await getSpecialList()
      this.specialList = res.result
    }
  }
})
