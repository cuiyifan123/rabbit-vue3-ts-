import type { App } from 'vue'
import XtxBanner from './xtxBanner.vue'
import XtxSkeleton from './xtxSkeleton.vue'
import XtxMore from './xtxMore.vue'
import XtxBread from './Bread/index.vue'
import XtxBreadItem from './Bread/item.vue'
import XtxCitys from './citys.vue'
export default {
  install(app: App) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxBanner.name, XtxBanner)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)
    app.component(XtxCitys.name, XtxCitys)
  }
}

// export function registerComponent(app: App) {
//   app.component('XtxSkeleton', XtxSkeleton)
// }
