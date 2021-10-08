import { createVuePlugin } from 'vite-plugin-vue2'

export default {
    plugins: [createVuePlugin()],
    server: {
        proxy: {
          '/lemon': {
            target: 'http://localhost:5000',
            changeOrigin: true
          },
        }
      },
}