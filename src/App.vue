<template>
  <div id="app">
    <ul id="nav">
      <li><router-link to="/">v-webp</router-link></li>
      <li><router-link to="/debounce">v-debounce</router-link></li>
      <li><router-link to="/throttle">v-throttle</router-link></li>
      <li><router-link to="/copy">v-copy</router-link></li>
      <li><router-link to="/expandClick">v-expandClick</router-link></li>
      <li><router-link to="/ellipsis">v-ellipsis</router-link></li>
      <li><router-link to="/empty">v-empty</router-link></li>
      <li><router-link to="/format">v-format</router-link></li>
      <li><router-link to="/lazyLoad">v-lazyLoad</router-link></li>
    </ul>
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  min-height: 100vh;
  width: 20vw;
  border-right: 1px #000 solid;

  li {
    padding: 10px 0;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

#main {
  width: 80vw;
  padding: 10px;
}
</style>
