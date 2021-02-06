<!--
 * @Author       : Eug
 * @Date         : 2021-02-05 10:41:25
 * @LastEditTime : 2021-02-05 11:07:16
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/components/eug-carousel/index.vue
-->
<template>
  <div class="eug-carousel">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="img in carouselData"
        :key="img[carouselId]"
        :name="img[carouselId]"
        :img-src="img[carouselUrl]"
      />
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "eug-carousel",
  props: {
    carouselData: {
      type: Array,
      default: () => []
    },
    carouselUrl: {
      type: String
    },
    carouselId: {
      type: String
    }
  },
  data() {
    return {
      slide: 1,
      autoplay: true
    };
  },
  created() {}
};
</script>

<style>
</style>