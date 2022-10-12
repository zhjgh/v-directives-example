<template>
  <div class="demo">
    <button v-expandClick @click="handleClick">点击扩大范围，默认10px</button>
    <div></div>
    <button v-expandClick="(20, 30, 40, 50)" @click="handleClick">
      点击扩大范围，自定义，注意数值中间不需要空格
    </button>
  </div>
</template>

<script>
export default {
  name: "expandClick",
  methods: {
    handleClick() {
      alert("点击了");
    },
  },
};
</script>

<style scoped>
.demo div {
  height: 100px;
}

button {
  padding: 10px;
  margin: 10px;
}
</style>
