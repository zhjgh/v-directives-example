<template>
  <div class="demo">
    <h1>原图大小：1.3MB</h1>
    <img
      alt="Vue logo"
      src="https://res.miaocode.com/e2cf8a7e-c320-4e1a-aac3-591e1147245b.png"
    />
    <h1>webp格式大小：64.6kb</h1>
    <h3>
      v-webp="'https://res.miaocode.com/e2cf8a7e-c320-4e1a-aac3-591e1147245b.png'"
    </h3>
    <img
      alt="Vue logo"
      v-webp="
        'https://res.miaocode.com/e2cf8a7e-c320-4e1a-aac3-591e1147245b.png'
      "
    />
  </div>
</template>

<script>
export default {
  name: "Webp",
};
</script>

<style>
img {
  width: 100%;
}
</style>
