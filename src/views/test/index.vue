<!--
 * @Author       : Eug
 * @Date         : 2021-02-04 12:26:06
 * @LastEditTime : 2021-02-05 11:14:45
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/views/test/index.vue
-->
<template>
  <div class="test-container">
      <!-- <eug-editor/> -->
      <eug-carousel  :carousel-data="carouselAry[4]" :carousel-url="'image_url'" :carousel-id="'image_id'"/>
  </div>
</template>

<script>
import serverApi from '@/api'
import { cloneDeep } from 'lodash'
export default {
    components: {
    },
    data() {
        return {
            carouselAry: []
        }
    },
    created() {

        this.handleGetImageList()
    },
    mounted(){
    },
    methods:{
        async handleGetImageList () {
            try {
                let res = await serverApi.GetImageList()
                if (res.code === 200) {
                    const imgAry = cloneDeep(res.result)
                    for(var i = 0; i < Math.ceil(imgAry.length / 5) ; i ++) {
                        this.carouselAry[i] = imgAry.slice(i*5, i*5+5)
                    }
                    console.log(this.carouselAry);
                    
                }
                console.log(res);
            } catch (error) {
                console.log(error);
                
            }
        }
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