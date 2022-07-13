import { GoodsInfo } from '@/types/response'

import { defineStore } from 'pinia'
import { getGoodsInfo } from '@/api/goods'
export const useGoodsStore = defineStore('goods', {
  state: () => ({
    // 商品详细信息
    info: {} as GoodsInfo
  }),
  actions: {
    async getGoodsInfo(id: string) {
      const res = await getGoodsInfo(id)
      this.info = res.result
    }
  }
})
