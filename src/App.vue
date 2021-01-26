<!--
 * @Author: yeyuhang
 * @Date: 2020-11-07 12:32:28
 * @LastEditTime: 2021-01-26 14:44:01
 * @LastEditors: Please set LastEditors
 * @Descripttion: 头部注释
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
</style>
