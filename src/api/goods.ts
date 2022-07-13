import { request } from '@/utils/request'
import { GoodsInfo } from '@/types/response'
export function getGoodsInfo(id: string) {
  return request<GoodsInfo>({
    method: 'get',
    url: '/goods',
    params: {
      id
    }
  })
}
