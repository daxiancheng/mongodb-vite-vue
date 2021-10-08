import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import VueLazyload from 'vue-lazyload'
// import loadingPath from './assets/1-c.png'
// Vue.use(VueLazyload)
// // 配置项
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'https://img.zcool.cn/community/01b4e95c4c1b78a801213f2661815b.gif',
//   loading: 'https://img.zcool.cn/community/01b4e95c4c1b78a801213f2661815b.gif',
//   attempt: 1
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
