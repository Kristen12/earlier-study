<template>
    <div class="test1">
      <h2>我是测试页面1</h2>
      <router-link to="/subtest1/">subtest1</router-link>
    <router-link to="/subtest2/">subtest2</router-link>
    <router-view/>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
      .test1{
    height: 300px;
    background: #ff0000;
  }
</style>