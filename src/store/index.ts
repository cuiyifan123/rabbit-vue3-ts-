import { useCategoryStore } from './modules/category'
import { useHomeStore } from './modules/home'
import { useGoodsStore } from './modules/goods'
export default function useRootStore() {
  return {
    category: useCategoryStore(),
    home: useHomeStore(),
    goods: useGoodsStore()
  }
}
