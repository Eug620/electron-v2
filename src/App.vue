<!--
 * @Author: yeyuhang
 * @Date: 2020-11-07 12:32:28
 * @LastEditTime: 2020-11-13 19:47:45
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
-->
<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  components: {
    HelloWorld
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
