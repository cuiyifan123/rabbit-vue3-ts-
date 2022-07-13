import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

interface IOptions {
  // 是否只执行一次
  stop: boolean
}

export function useLazyData(callback: () => void, options?: IOptions) {
  const target = ref(null)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        callback()
        options?.stop && stop()
      }
    },
    {
      threshold: 0
    }
  )
  return target
}
