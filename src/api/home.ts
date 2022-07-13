import { request } from '@/utils/request'
import type {
  ICategoryItem,
  IBannerItem,
  INewList,
  IHotList,
  IBrandList,
  IGoodsItem,
  ISpecial,
  TopCategory,
  SubCategory
} from '@/types/response.d'

/**
 * 获取商品分类的api
 * @returns promise的请求
 */
export function getAllCategory() {
  return request<ICategoryItem[]>({
    method: 'get',
    url: '/home/category/head'
  })
}
/**
 * 获取轮播图数据的api
 * @returns promise的请求
 */
export function getBannerList() {
  return request<IBannerItem[]>({
    method: 'get',
    url: '/home/banner'
  })
}

/**
 *  获取新鲜好物数据的api
 * @returns promise的请求
 */
export function getNewList() {
  return request<INewList[]>({
    method: 'get',
    url: '/home/new'
  })
}

/**
 * 获取人气推荐数据的api
 * @returns promise的请求
 */
export function getHotList() {
  return request<IHotList[]>({
    method: 'get',
    url: '/home/hot'
  })
}
/**
 * 获取热门品牌数据的api
 * @returns promise的请求
 */
export function getBrandList() {
  return request<IBrandList[]>({
    method: 'get',
    url: '/home/brand'
  })
}

export function getGoodsList() {
  return request<IGoodsItem[]>({
    method: 'get',
    url: '/home/goods'
  })
}

/**
 *
 * @returns promise的请求
 */
export function getSpecialList() {
  return request<ISpecial[]>({
    method: 'get',
    url: '/home/special'
  })
}
/**
 *  获取一级分类的信息
 * @param id 一级分类的id
 * @returns promise的请求
 */
export function getTopCategory(id: string) {
  return request<TopCategory>({
    method: 'get',
    url: '/category',
    params: {
      id
    }
  })
}

/**
 *  获取子分类的信息
 * @param id 子分类的id
 * @returns  promise的请求
 */
export function getSubCategory(id: string) {
  return request<SubCategory>({
    method: 'get',
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
