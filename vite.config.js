import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(projectRootDir, 'lib/index.js'),
      name: '@franzisker/datatable',
      fileName: (format) => `@franzisker/datatable.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@lib": "/lib",
    },
  },
  plugins: [
    vue(),
    vueJSX(),
    WindiCSS()
  ]
})
