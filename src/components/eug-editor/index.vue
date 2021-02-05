<!--
 * @Author       : Eug
 * @Date         : 2021-02-04 14:40:08
 * @LastEditTime : 2021-02-05 10:33:15
 * @LastEditors  : Eug
 * @Descripttion : eug-editor
 * @FilePath     : /electron-v2/src/components/eug-editor/index.vue
-->
<template>
  <div class="eug-editor">
    <q-card class="eug-editor-card" flat bordered>
      <q-item>
        <q-item-section>
          <q-item-label>XXX</q-item-label>
          <q-item-label caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <div class="eug-editor-card-contanier"></div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = monaco.editor.create(
        document.querySelector(".eug-editor-card-contanier"),
        {
          value: `console.log("hello,world")`,
          language: "javascript"
        }
      );
    }
  }
};
</script>

<style>
.eug-editor-card-contanier {
  height: 500px;
  width: 100%;
}
</style>