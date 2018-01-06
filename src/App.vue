<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  padding: 0;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  min-height: 20vh;
  padding: 50px;
  background-color: #3745ED;
  color: white;
}

.buttons {
  width: -webkit-fill-available;
  padding: 5px 40px;
  display: inline-flex;
  justify-content: space-between;

}

.button {
  cursor: pointer;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}
.content {
  text-align: center;
}

.themes {
  list-style-type: none;
  text-align: left;
}
.body {
  display: inline-flex;
  width: 100%;
  height: 50vh;
}


.left {
  display: flex;
  justify-content: center;
  margin-top: 8%;
  width: 15%;
  font-size: 1.2em;
}
.right {
  width: 80%;
  padding: 50px;
}
.separator {
  border-left: 2px solid silver;
  margin: 5% 10px;
}

li {
  margin-left: 35px;
  color: grey;
}
</style>
