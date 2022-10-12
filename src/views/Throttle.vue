<template>
  <div class="demo">
    <button v-throttle="handleClick">默认延迟1s</button>
    <button v-throttle:2000="handleClick">延迟2s</button>
    <button v-throttle="() => handleClick2(111)">函数传参</button>
  </div>
</template>

<script>
export default {
  name: "throttle",
  methods: {
    handleClick() {
      console.log(`点我啦!`);
    },
    handleClick2(val) {
      console.log(`${val}`);
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
}
</style>
