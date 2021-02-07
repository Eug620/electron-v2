<!--
 * @Author       : Eug
 * @Date         : 2021-02-04 12:26:06
 * @LastEditTime : 2021-02-07 12:09:40
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/views/test/index.vue
-->
<template>
  <div class="test-container">
    <eug-table
      :table-data="tableData"
      :table-columns="tableColumns"
      is-show-visible
      visible-option-value="name"
    />
    <!-- <eug-carousel  :carousel-data="carouselAry[4]" :carousel-url="'image_url'" :carousel-id="'image_id'"/> -->
  </div>
</template>

<script>
import serverApi from "@/api";
import { cloneDeep } from "lodash";
export default {
  components: {},
  data() {
    return {
      tableColumns: [
        {
          name: "desc",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      tableData: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ],
      carouselAry: []
    };
  },
  created() {
    this.handleGetImageList();
  },
  mounted() {},
  methods: {
    async handleGetImageList() {
      try {
        let res = await serverApi.GetImageList();
        if (res.code === 200) {
          const imgAry = cloneDeep(res.result);
          for (var i = 0; i < Math.ceil(imgAry.length / 5); i++) {
            this.carouselAry[i] = imgAry.slice(i * 5, i * 5 + 5);
          }
          console.log(this.carouselAry);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.test-header,
.test-body {
  width: 100%;
  height: 200px;
}
.test-header {
  border: 1px solid #ccc;
}
.test-body {
  border: 1px solid #000;
}
</style>