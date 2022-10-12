<template>
  <div class="demo">
    <button v-copy="copyText">复制文本</button>
  </div>
</template>

<script>
export default {
  name: "copy",
  data() {
    return {
      copyText: "111",
    };
  },
  mounted() {
    this.copyText = "222";
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
}
</style>
