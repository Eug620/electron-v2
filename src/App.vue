<!--
 * @Author: yeyuhang
 * @Date: 2020-11-07 12:32:28
 * @LastEditTime: 2021-01-27 11:31:27
 * @LastEditors: Please set LastEditors
 * @Descripttion: 头部注释
-->
<template>
  <div id="app">
    <router-view/>
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
.eug-content-body{
  margin-top: 60px;
}
</style>
