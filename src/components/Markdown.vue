<template>
  <div class="container">
    <button class="save" @click="handleSave">保存</button>
    <div id="vditor"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Vditor from "vditor";
import { getMarkdown, setMarkdown } from "../apis/markdown";

let vditorIns: any = null;

const init = () => {
  const options = {
    tab: "\t",
    counter: "999999",
    typewriterMode: true,
    mode: "sv",
    preview: {
      delay: 100,
    },
    outline: true,
  } as any;
  vditorIns = new Vditor("vditor", options);
  vditorIns.focus();
};

const getEditorContent = async () => {
  const response = await getMarkdown();
  return response?.data ?? "";
};

const handleSave = () => {
  if (vditorIns) {
    const value = vditorIns.getValue();
    setMarkdown(value);
  }
};

onMounted(async () => {
  console.log("onMounted");
  init();
  const value = await getEditorContent();
  if (vditorIns) {
    vditorIns.setValue(value, true);
  }
});
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

#vditor {
  margin-top: 10px;
  text-align: left;
  flex: 1;
}
</style>
