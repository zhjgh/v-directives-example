<template>
  <div class="demo">
    <li>
      <span class="label">v-format.toFixed="243112.331":</span>
      <span class="value" v-format.toFixed="243112.331"></span>
    </li>
    <li>
      <span class="label">v-format.price="2431123311":</span>
      <span class="value" v-format.price="2431123311"></span>
    </li>
  </div>
</template>

<script>
export default {
  name: "format",
};
</script>

<style scoped>
.demo li {
  text-align: left;
  height: 50px;
  font-size: 20px;
}

.demo .label {
  display: inline-block;
  text-align: right;
  width: 300px;
  margin-right: 15px;
}

.demo .value {
  color: red;
}
</style>
