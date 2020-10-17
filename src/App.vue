<template>
  <div>
    <button @click="getGoodsList()">请求数据</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from 'axios'

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
   async getGoodsList() {
     const {data : res} =  await axios.get("http://localhost:9999/");
      console.log(res);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
