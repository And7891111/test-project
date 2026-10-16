<template>
  <div id="app">
    <!-- 注释掉之前的单组件挂载 -->
    <!-- <h1 id="h1title">{{ message }}</h1> -->
    <!-- <test-button></test-button> -->
    <!-- <user-view></user-view> -->
    <!-- <question-view></question-view> -->
    
    <!-- 使用路由视图，根据 URL 动态渲染组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 之前导入的组件也全部注释掉
// import QuestionView from './views/element/QuestionView.vue';
// import TestButton from './views/element/TestButton.vue';
// import UserView from './views/element/UserView.vue';

export default {
  // components: { QuestionView },
  data() {
    return {
      message: "hello vue"
    }
  }
}
</script>