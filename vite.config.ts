import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // reactivityTransform让 props可以赋值默认值  
    reactivityTransform:true
  }), vueSetupExtend()],
  server:{
    proxy:{
      
    }
  },
  resolve: {
    alias: {
      "@":path.resolve(__dirname,'src'),
      "comp":path.resolve(__dirname,'src/components')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData:`
        @import "@/assets/styles/variables.less";
        @import "@/assets/styles/mixins.less";
        `
      },
      styl: {
        additionalData: `$injectedColor ?= orange`
      }
    }
  }
})
