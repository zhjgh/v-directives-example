<template>
  <ul class="demo">
    <li>
      <span class="label">v-empty="'我不是空'": </span>
      <span class="value" v-empty="'我不是空'"></span>
    </li>
    <li>
      <span class="label">v-empty="'undefined'": </span>
      <span class="value" v-empty="'undefined'"></span>
    </li>
    <li>
      <span class="label">v-empty="'null'": </span>
      <span class="value" v-empty="'null'"></span>
    </li>
    <li>
      <span class="label">v-empty="''": </span>
      <span class="value" v-empty="''"></span>
    </li>
    <li>
      <span class="label">v-empty="'{}'": </span>
      <span class="value" v-empty="'{}'"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "empty",
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
