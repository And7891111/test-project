import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/element/UserView.vue' // 取消注释，引入组件
import QuestionView from '../views/element/QuestionView.vue' // 取消注释，引入组件

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user' // 首页默认重定向到用户管理页面
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/question',
    name: 'question',
    component: QuestionView
  }
]

const router = new VueRouter({
  routes
})

export default router