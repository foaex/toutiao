import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入ElementUI组件库
import './plugins/element'
// 导入ElementUI组件库的css
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/style/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
