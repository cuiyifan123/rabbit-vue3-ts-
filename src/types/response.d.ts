// 接口响应的类型
export interface IResponseResult<T> {
  // 状态码
  code: string
  // 响应信息
  msg: string
  // 返回的数据
  result: T
}
// 首页商品分类的类型
export interface ICategoryItem {
  id: string
  name: string
  picture: string
  children: ICategoryItem[]
  goods: IgoodsItem[]
}
// 首页商品的类型
interface IgoodsItem {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount?: number
  orderNum?: number
}

// 首页轮播图的类型
export interface IBannerItem {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

// 首页新鲜好物的类型
interface INewList {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount?: any
  orderNum: number
}

// 首页 人气推荐的类型
export interface IHotList {
  id: string
  picture: string
  title: string
  alt: string
}
// 首页 热门品牌的类型
export type IBrandList = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}

// 首页产品区块的类型 start
export interface IGoodsItem {
  id: string
  name: string
  picture: string
  saleInfo: string
  children: Child[]
  goods: Good[]
}

interface Good {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount?: any
  orderNum: number
}

interface Child {
  id: string
  name: string
  layer: number
  parent?: any
}
// 首页产品区块的类型 end

interface ISpecial {
  creator: string
  isDelete: number
  createTime: string
  updateTime: string
  id: string
  classificationId: string
  title: string
  summary: string
  lowestPrice: number
  cover: string
  detailsUrl: string
  collectNum: number
  viewNum: number
  replyNum: number
}
// 顶级分类类型
export interface TopCategory {
  id: string
  name: string
  picture: string
  children: CategoryItem[]
}

interface CategoryItem {
  id: string
  name: string
  picture: string
  parentId?: any
  parentName?: any
  goods: Good[]
  categories?: any
  brands?: any
  saleProperties?: any
}

export interface Good {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount?: any
  orderNum: number
}

interface SubCategory {
  id: string
  name: string
  picture?: any
  parentId: string
  parentName: string
  goods: Good[]
  categories: Category[]
  brands: Brand[]
  saleProperties: SaleProperty[]
}

interface SaleProperty {
  id: string
  name: string
  properties: Property[]
}

interface Property {
  id: string
  name: string
}

interface Brand {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}

interface Category {
  id: string
  name: string
  layer: number
  parent?: any
}

interface Good {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount?: any
  orderNum: number
}

// 商品模块的类型声明
export type GoodsInfo = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  categories: {
    id: string
    name: string
  }[]
  specs: Spec[]
}
// 商品的规格类型
export type Spec = {
  name: string
  values: SpecValue[]
}
export type SpecValue = {
  desc: string
  name: string
  picture: string
  selected: boolean
}
