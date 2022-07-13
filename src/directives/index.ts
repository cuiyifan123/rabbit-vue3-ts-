import type { App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
export default {
  install(app: App) {
    app.directive('lazy', {
      mounted(el, binding) {
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
          }
          el.onerror = () => {
            el.src = defaultImg
          }
        })
      }
    })
  }
}
