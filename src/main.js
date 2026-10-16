import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 1. 引入 Element UI 组件库
import ElementUI from 'element-ui';
// 2. 引入 Element UI 的 CSS 样式文件 (如果没有这行，界面也会变丑)
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 3. 注册 Element UI，让整个项目都能使用 <el-xxx> 标签
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')