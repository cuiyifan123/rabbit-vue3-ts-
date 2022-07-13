import XtxBanner from '@/components/xtxBanner.vue'
import XtxSkeleton from '@/components/xtxSkeleton.vue'
import XtxMore from '@/components/XtxMore.vue'
import XtxBread from '@/components/Bread/index.vue'
import XtxBreadItem from '@/components/Bread/item.vue'
import XtxCitys from '@/components/citys.vue'
// 参考：element-plus
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxBanner: typeof XtxBanner
    XtxMore: typeof XtxMore
    XtxBread: typeof XtxBread
    XtxBreadItem: typeof XtxBreadItem
    XtxCitys: typeof XtxCitys
  }
}
export {}
