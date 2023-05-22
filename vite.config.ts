import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer({})],
  //解决“vite use `--host` to expose”
  base: './', //不加打包后白屏
  server: {
    host: '0.0.0.0',
    // port: 8080,
    open: true
  },
  resolve: {
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  // css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     scss: {
  //       // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
  //       // 给导入的路径最后加上 ;
  //       additionalData: '@import "@/assets/style/mixin.scss";'
  //     }
  //   }
  // },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
