<!--
 * @Author       : Eug
 * @Date         : 2021-02-04 12:26:06
 * @LastEditTime : 2021-02-05 10:34:01
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/views/test/index.vue
-->
<template>
  <div class="test-container">
      <eug-editor/>
  </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
        }
    },
    
    mounted(){
    },
    methods:{
    }  
}
</script>

<style>
.test-header,
.test-body{
    width: 100%;
    height: 200px;
}
.test-header{
    border: 1px solid #ccc;
}
.test-body{
    border: 1px solid #000;
}
</style>