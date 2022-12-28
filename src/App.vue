<template>
  <Nav />
  <Sidebar />
  <router-view></router-view>
</template>

<script>
/* eslint-disable */ 
import Nav from '@/components/Nav.vue';
import Sidebar from '@/components/SideBar.vue';

export default {
  setup() {

  },

  components:{
    Nav,
    Sidebar,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>