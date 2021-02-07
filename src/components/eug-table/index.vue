<!--
 * @Author       : Eug
 * @Date         : 2021-02-07 11:24:54
 * @LastEditTime : 2021-02-07 12:10:11
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/components/eug-table/index.vue
-->
<template>
  <div>
    <q-table
      title="Treats"
      :data="tableData"
      :columns="tableColumns"
      row-key="name"
      :visible-columns="visibleColumns"
    >
      <template v-slot:top>
        <img
          style="height: 50px; width: 50px"
          src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
        />

        <q-space />

        <q-select
          v-if="isShowVisible"
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          @change="()=>$emit('input')"
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="tableColumns"
          :option-value="visibleOptionValue"
          options-cover
          style="min-width: 150px"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    isShowVisible: {
      type: Boolean,
      default: false
    },
    visibleOptionValue: {
      type: String,
      default: "name"
    }
  },
  data() {
    return {
      visibleColumns: []
    };
  },
  created() {
    if (this.isShowVisible) {
      this.visibleColumns = this.tableColumns.map(
        item => item[this.visibleOptionValue]
      );
    }
  }
};
</script>

<style>
</style>